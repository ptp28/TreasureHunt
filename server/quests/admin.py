from django.contrib import admin
from django.forms import BaseInlineFormSet, ValidationError
from .models import MCQuestion, QuestionGroupQuestion, TextQuestion, MCOption, Quest


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('description',)
    search_fields = ('description', 'text')

class MCOptionInlineFormSet(BaseInlineFormSet):
    def clean(self):
        super().clean()

        correct_options = 0
        for form in self.forms:
            if not form.cleaned_data.get('DELETE', False):
                if form.cleaned_data.get('is_correct', False):
                    correct_options += 1

        if correct_options == 0:
            raise ValidationError("At least one option must be marked correct.")

        if correct_options > 1:
            raise ValidationError("Only one option should be marked correct.")
        
class MCOptionInline(admin.TabularInline):
    model = MCOption
    formset = MCOptionInlineFormSet
    max_num = 4
    min_num = 4
    verbose_name = "Multiple Choice Option"
    verbose_name_plural = "Multiple Choice Options"
    can_delete = False

class MCQuestionAdmin(QuestionAdmin):
    inlines = [MCOptionInline]
    verbose_name = 'Multiple Choice Question'
    verbose_name_plural = "Multiple Choice Questions"

    def save_model(self, request, obj, form, change):
        obj.save()

    def save_related(self, request, form, formsets, change):
        super().save_related(request, form, formsets, change)

class TextQuestionAdmin(QuestionAdmin):
    verbose_name = "Text Question"
    verbose_name_plural = "Text Questions"

class QuestionGroupQuestionInline(admin.TabularInline):
    model = QuestionGroupQuestion
    extra = 1
    fields = ('question', 'order',)
    ordering = ('order',)
    verbose_name = "Group Question"
    verbose_name_plural = "Group Questions"

class QuestAdmin(admin.ModelAdmin):
    list_display = ('description',)
    search_fields = ('description', 'text')
    inlines = [QuestionGroupQuestionInline]

admin.site.register(Quest, QuestAdmin)
admin.site.register(TextQuestion, TextQuestionAdmin)
admin.site.register(MCQuestion, MCQuestionAdmin)
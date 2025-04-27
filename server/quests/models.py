from django.db import models


class Quest(models.Model):
    name = models.CharField(max_length=200, help_text="The name of the quest.")
    location = models.CharField(max_length=200, help_text="The city where the quest takes place.")
    description = models.TextField(help_text="A short description of the quest.")
    image = models.ImageField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="The price of the quest in the USD.")
    questions = models.ManyToManyField(
        'Question',
        through='QuestionGroupQuestion',
        related_name='groups',
        blank=True,
        help_text="The questions that belong to this group."
    )

    class Meta:
        verbose_name = "Quest"
        verbose_name_plural = "Quests"

    def __str__(self):
        return f"{self.location}: {self.name}" 

class QuestionGroupQuestion(models.Model):
    group = models.ForeignKey('Quest', on_delete=models.CASCADE)
    question = models.ForeignKey('Question', on_delete=models.CASCADE)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = "Group Question"
        verbose_name_plural = "Group Questions"
        ordering = ['order']
        unique_together = ('group', 'question')

    def __str__(self):
        return f"{self.group.name} - {self.question.text[:30]} (#{self.order})"

class Question(models.Model):
    description = models.CharField(max_length=200, help_text="A short descriptive text for the question (Not shown to users).")
    text = models.TextField(help_text="The question text that will be shown to users.")
    image = models.ImageField(blank=True, null=True)
    image_desc = models.CharField(name="Image Description", help_text="This description will be shown if the image cannot be seen by the user.", max_length=200, blank=True, null=True)

    def __str__(self):
        if hasattr(self, 'mcquestion'):
            return f"MCQ - {self.description}"
        if hasattr(self, 'textquestion'):
            return f"Q - {self.description}"
        return f"{self.description}"

class MCQuestion(Question):
    class Meta:
        verbose_name = "Multiple Choice Question"
        verbose_name_plural = "Multiple Choice Questions"

    def __str__(self):
        return f"MCQ - {self.description}"
    
class MCOption(models.Model):
    question = models.ForeignKey(MCQuestion, on_delete=models.CASCADE, related_name='options')
    text = models.CharField(max_length=256)
    is_correct = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Option"
        verbose_name_plural = "Options"
    
    def __str__(self):
        return f"{self.text} - {'Correct' if self.is_correct else 'Incorrect'}"

class TextQuestion(Question):
    correct_answer = models.TextField()

    class Meta:
        verbose_name = "Text Question"
        verbose_name_plural = "Text Questions"

    def __str__(self):
        return f"Q - {self.description}"

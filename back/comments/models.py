from django.db import models

class Comment(models.Model):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="comments")
    post = models.ForeignKey("posts.Post", on_delete=models.CASCADE, related_name="post_comments")
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.created_at}"


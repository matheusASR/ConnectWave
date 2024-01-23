from django.db import models

class Post(models.Model):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(blank=True) 
    image = models.ImageField(upload_to='post_images/', blank=True, null=True) 
    caption = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.created_at}"




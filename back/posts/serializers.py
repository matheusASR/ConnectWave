from rest_framework import serializers
from .models import Post
from comments.serializers import CommentSerializer
from users.serializers import CustomUserSerializer

class PostSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    post_comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'user', 'content', 'image', 'caption', 'created_at', 'post_comments']
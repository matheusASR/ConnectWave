from rest_framework import serializers
from .models import Post
from users.serializers import UserSerializer
from comments.serializers import CommentSerializer

class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    post_comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'user', 'content', 'image', 'caption', 'created_at', 'post_comments']
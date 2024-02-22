from rest_framework import serializers
from .models import Post
from users.serializers import CustomUserSerializer

class PostSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'user', 'content', 'image', 'caption', 'created_at', 'post_comments']
        read_only_fields = ['user']
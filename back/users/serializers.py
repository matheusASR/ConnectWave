from rest_framework import serializers
from .models import User
from rest_framework.validators import UniqueValidator

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data: dict) -> User:
        return User.objects.create_user(**validated_data)
     
    def update(self, instance: User, validated_data: dict) -> User:
        for k, v in validated_data.items():
            if k == "password":
                instance.set_password(v)
            else:
                setattr(instance, k, v)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'bio', 'profile_picture']
        extra_kwargs = {
            "password": {
                "write_only": True
            },
            "username": {
                "validators": [UniqueValidator(queryset=User.objects.all(), message="A user with that username already exists.")],
            },
            "email": {
                "validators": [UniqueValidator(queryset=User.objects.all(), message="This field must be unique.")]
            }
        }

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'profile_picture']
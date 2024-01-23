from django.urls import path

from .views import (
    CreatePostView, DeletePostView, GetPostsByUserIdView, GetAllPostsView,
)

urlpatterns = [
    # Post URLs
    path('posts/create/', CreatePostView.as_view(), name='create-post'),
    path('posts/delete/<int:pk>/', DeletePostView.as_view(), name='delete-post'),
    path('posts/user/<int:user_id>/', GetPostsByUserIdView.as_view(), name='get-posts-by-user'),
    path('posts/all/', GetAllPostsView.as_view(), name='get-all-posts')
]
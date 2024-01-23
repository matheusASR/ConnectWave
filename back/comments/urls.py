from django.urls import path

from .views import (
    CreateCommentView, DeleteCommentView, GetCommentsByPostIdView
)

urlpatterns = [
    path('comments/create/', CreateCommentView.as_view(), name='create-comment'),
    path('comments/delete/<int:pk>/', DeleteCommentView.as_view(), name='delete-comment'),
    path('comments/post/<int:post_id>/', GetCommentsByPostIdView.as_view(), name='get-comments-by-post'),
]

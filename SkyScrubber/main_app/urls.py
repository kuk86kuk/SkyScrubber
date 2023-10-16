from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('render_photo/', views.render_photo, name='render_photo'),
    path('stack/', views.stack, name='stack'),
    path('algorithm/', views.algorithm, name='algorithm'),
    
]
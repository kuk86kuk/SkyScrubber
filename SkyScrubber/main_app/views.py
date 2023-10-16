from django.shortcuts import render

def index(request):
    return render(request, 'main_app/index.html')

def about(request):
    return render(request, 'main_app/about.html')

def render_photo(request):
    return render(request, 'main_app/render_photo.html')

def stack(request):
    return render(request, 'main_app/stack.html')

def algorithm(request):
    return render(request, 'main_app/algorithm.html')
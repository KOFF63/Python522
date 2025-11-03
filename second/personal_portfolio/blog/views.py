from django.shortcuts import render, get_object_or_404
from .models import Skills, Blog

def index(request):
    projects = Skills.objects.all()
    return render(request, 'skills/index.html', {'projects': projects})

def blogs(request):
    blogs = Blog.objects.all().order_by('-date')
    return render(request, 'skills/blogs.html', {'blogs': blogs})

def blog_detail(request, blog_id):
    blog = get_object_or_404(Blog, id=blog_id)
    return render(request, 'skills/blog_detail.html', {'blog': blog})
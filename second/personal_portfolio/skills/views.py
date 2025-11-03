from django.shortcuts import render
from .models import Skills


def index(request):
    projects = Skills.objects.all()
    return render(request, 'skills/index.html', {'projects': projects})


def blogs(request):
    return render(request, 'skills/blogs.html')


def blog_detail(request, blog_id):
    return render(request, 'skills/blog_detail.html')

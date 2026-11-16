window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "django",
  order: 20,
  group: "Frameworks & Engines",
  name: "Django",
  color: "#0c4b33",
  tagline: "A Python web framework with everything built in: database, admin panel and login.",
  level: "Intermediate",
  usedFor: "websites, web apps, APIs, content sites",
  ext: ".py",
  comment: "#",
  kw: ["import", "from", "as", "class", "def", "return", "if", "else", "elif", "for", "in", "with", "pass", "True", "False", "None", "and", "or", "not"],
  types: ["models", "CharField", "TextField", "IntegerField", "DateTimeField", "ForeignKey", "BooleanField", "Model", "HttpResponse", "render", "path", "include", "admin", "objects", "all", "filter", "get", "create", "order_by", "get_object_or_404", "ModelForm", "request", "urlpatterns"],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "The pieces you touch most, on one screen. A request goes through a URL, a view and (usually) a template and a model.",
      code: "# urls.py: which URL runs which view\npath(\"\", views.home, name=\"home\")\n\n# views.py: a view takes a request and returns a response\nfrom django.http import HttpResponse\ndef home(request):\n    return HttpResponse(\"Hello, World!\")\n\n# models.py: a model is a database table\nclass Post(models.Model):\n    title = models.CharField(max_length=100)\n    body = models.TextField()\n\n# Use it\nPost.objects.create(title=\"Hi\", body=\"First post\")\nPost.objects.filter(title__contains=\"Hi\")"
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "You need Python first. Make a virtual environment, so Django stays inside your project, then install Django. A project is the whole site, and an app is one part of it (like a blog). The development server reloads when you change code.",
      shell: true,
      code: `python --version
python -m venv venv
source venv/bin/activate       # Windows: venv/Scripts/activate
pip install django

django-admin startproject mysite
cd mysite
python manage.py startapp blog       # create an app
python manage.py runserver           # open http://127.0.0.1:8000`
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "Make a view in blog/views.py, then connect it to an address in mysite/urls.py. Visit the address and you see your text. Remember to add the app name to INSTALLED_APPS in settings.py.",
      code: `# blog/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, World!")

# mysite/urls.py
from django.contrib import admin
from django.urls import path
from blog import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.home),
]`
    },
    {
      id: "models",
      title: "Models & database",
      text: "A model is a Python class that describes a database table. You never write SQL: Django creates the table for you. After you change a model, run makemigrations to prepare the change and migrate to apply it. Use the objects manager to create and search rows.",
      code: `# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# in the terminal:
#   python manage.py makemigrations
#   python manage.py migrate

# In Python (python manage.py shell):
#   Post.objects.create(title="Hi", body="First post")
#   Post.objects.all()
#   Post.objects.filter(title__contains="Hi").order_by("-created")`
    },
    {
      id: "templates",
      title: "Views & templates",
      text: "A view collects the data, and a template is an HTML file that shows it. The template language uses double curly braces for values and curly-percent tags for loops and conditions. Put templates in blog/templates/blog/.",
      code: `# blog/views.py
from django.shortcuts import render, get_object_or_404
from .models import Post

def post_list(request):
    posts = Post.objects.order_by("-created")
    return render(request, "blog/list.html", {"posts": posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)    # shows a 404 page if missing
    return render(request, "blog/detail.html", {"post": post})

# blog/templates/blog/list.html
# {% for post in posts %}
#   <h2><a href="/post/{{ post.pk }}/">{{ post.title }}</a></h2>
# {% empty %}
#   <p>No posts yet.</p>
# {% endfor %}`
    },
    {
      id: "admin",
      title: "Admin panel",
      text: "Django gives you a ready-made admin website where you can add, edit and delete data. Create an admin user, register your model, and open /admin/ to log in.",
      code: `# blog/admin.py
from django.contrib import admin
from .models import Post

admin.site.register(Post)

# in the terminal:
#   python manage.py createsuperuser
#   python manage.py runserver
# then open http://127.0.0.1:8000/admin/`
    },
    {
      id: "urls",
      title: "URLs & forms",
      text: "Give each app its own urls.py and connect it with include(). Parts of the address can become arguments of your view. For forms, a ModelForm builds the form and checks the data for you. Every POST form in a template needs the csrf_token tag.",
      code: `# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.post_list),
    path("post/<int:pk>/", views.post_detail),    # pk is passed to the view
    path("new/", views.post_new),
]

# blog/forms.py
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ["title", "body"]

# in the template:
#   <form method="post">{% csrf_token %}{{ form.as_p }}<button>Save</button></form>`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Django follows the MVT pattern: Model (data), View (logic) and Template (page). Each piece has one job. Many things you would write yourself, like login, forms, security and the admin, already exist. Never leave DEBUG on and never share SECRET_KEY when you publish a site.",
      code: `# The flow of one page visit:
#   browser asks for /post/3/
#   urls.py        finds the matching view
#   views.py       asks the model for post 3
#   models.py      reads it from the database
#   template       turns it into HTML
#   browser        receives the page

# settings.py, before going live:
# DEBUG = False
# ALLOWED_HOSTS = ["yoursite.com"]`
    }
  ]
});

# Generated by Django 4.2.7 on 2023-12-02 22:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("iac_django_app", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="student",
            options={},
        ),
        migrations.RemoveField(
            model_name="student",
            name="date_joined",
        ),
        migrations.RemoveField(
            model_name="student",
            name="is_active",
        ),
        migrations.RemoveField(
            model_name="student",
            name="is_staff",
        ),
        migrations.RemoveField(
            model_name="student",
            name="username",
        ),
    ]

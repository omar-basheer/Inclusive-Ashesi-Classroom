# Generated by Django 3.2.10 on 2023-12-13 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('iac_django_app', '0005_lesson'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lesson',
            name='lesson_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
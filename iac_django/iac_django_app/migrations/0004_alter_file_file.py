# Generated by Django 4.2.7 on 2023-12-05 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("iac_django_app", "0003_student_is_staff_alter_student_is_superuser"),
    ]

    operations = [
        migrations.AlterField(
            model_name="file",
            name="file",
            field=models.FileField(upload_to="files/"),
        ),
    ]
# Generated by Django 5.0.3 on 2024-07-17 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_ecommerce', '0006_contact'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='message',
            field=models.TextField(blank=True, null=True),
        ),
    ]

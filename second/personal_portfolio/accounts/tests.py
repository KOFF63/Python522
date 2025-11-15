from django.test import TestCase
from django.contrib.auth.models import User
from .models import Profile

class ProfileModelTest(TestCase):
    def test_profile_creation(self):
        user = User.objects.create_user(username='testuser', password='12345')
        self.assertTrue(hasattr(user, 'profile'))
        self.assertEqual(user.profile.user, user)
from rest_framework import serializers
from .models import User


class registerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class loginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)
    tokens = serializers.SerializerMethodField()

    def get_tokens(self, obj):
        user = User.objects.filter(email=obj['email']).first()
        if user:
            return {
                "access": user.tokens()['access'],
                "refresh": user.tokens()['refresh']
            }
        else:
            raise serializers.ValidationError('User does not exist')

    def validate(self, data):
        user = User.objects.filter(email=data['email']).first()
        if user:
            if not user.is_active:
                raise serializers.ValidationError('User is not active')
            if user.check_password(data['password']):
                return {
                    "email": user.email,
                    "tokens":  user.tokens
                }
            else:
                raise serializers.ValidationError('Incorrect password')
        else:
            raise serializers.ValidationError('User does not exist')

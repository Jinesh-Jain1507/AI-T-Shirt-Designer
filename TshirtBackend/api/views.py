from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import openai, os
from dotenv import load_dotenv

load_dotenv()

key = os.getenv("SECRET_KEY", None)
openai.api_key = key

# Create your views here.
class GenerateImageView(APIView):
    def get(self, request):
        print(key)
        try:
            prompt = request.query_params.get('prompt')

            response = openai.images.generate(
                prompt=prompt,
                n=1,
                size='1024x1024',
                response_format='b64_json'
            )
            image = response.data[0].b64_json
            
            return Response({'photo': image}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
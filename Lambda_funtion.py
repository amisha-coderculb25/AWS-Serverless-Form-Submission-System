import json
import uuid
import boto3
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('FormSubmissions')

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])

        item = {
            'id': str(uuid.uuid4()),
            'name': body['name'],
            'email': body['email'],
            'message': body['message'],
            'createdAt': datetime.utcnow().isoformat()
        }

        table.put_item(Item=item)

        print("New form submission saved:", item)

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'message': 'Form submitted successfully'})
        }

    except Exception as e:
        print("Error:", str(e))

        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Failed to submit form'})
        }

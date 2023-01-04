

---
title: 02-Endpoint Demo
article: false
---
In this demo, we demonstrate how to create an endpoint in the following two ways:

- **AWS Console**
- **SDK**

Then, we will also talk about how to make predictions using an endpoint.

### AWS Console

To create the endpoint using the console, we first create an **endpoint configuration.** Then, we’re already basically done. We can then use this endpoint configuration via **create endpoint**. We can confirm the health of our endpoint in the SageMaker Console under 'Endpoints', which is under 'Inference.'

Quick heads-up: if you’re doing this through a personal account, there’s a limit of 2 instances across your endpoints. Contact AWS support if you want to increase this number.

### SDK

Reminder: all the code demonstrated here can be found in the course [Github repo](https://github.com/udacity/udacity-nd009t-C2-Developing-ML-Workflow/tree/master) in `Lesson 2, Lecture 2 Demo - Endpoint.ipynb`.

Through the SDK, we will first initiate a **boto3 client**. Then, we obtain the **model image uri**, the **model artifact**, and an **execution role**. This is used to initiate a `Model` object. Then, we call the `deploy` method, specifying what kind of instance we want and how many.

```python
role = get_execution_role()
image_uri = image_uris.retrieve(framework='xgboost',region='us-west-2', version='latest')
model_data = "s3://sagemaker-us-west-2-565094796913/boston-xgboost-HL/output/xgboost-2021-08-31-23-02-30-970/output/model.tar.gz"

model = Model(image_uri=image_uri, model_data=model_data, role=role)

predictor = model.deploy(initial_instance_count=1, instance_type="ml.m5.large")
```

### Using endpoint through SDK

To utilize this endpoint, you can do it programmatically through the SDK's `Predictor` interface. You pass in the **endpoint name** and your **Boto3 session**. Depending on the type of data, you may need to **serialize** the data. **Serializing** the data breaks the data down in such a way that it can be recreated later. An example of a predictor object and serialization is shown below.

```python
#deploy the model
deployment = model.deploy(
    initial_instance_count=1,
    instance_type='ml.m5.xlarge',
    )
#get the endpoint name
endpoint = deployment.endpoint_name

#instantiate a Predictor
predictor = sagemaker.predictor.Predictor(
    endpoint,
    sagemaker_session=sagemaker.Session(),
)

#prepare one image for prediction
predictor.serializer = IdentitySerializer("image/png")
with open("test_image.png", "rb") as f:
    payload = f.read()

#use the predictor to make a prediction
inference = predictor.predict(payload)
```

### Make sure you delete the endpoint and other instances once you complete the demo to avoid cost!

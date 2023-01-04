
---
title: 03-Batch Transform
article: false
---
### Batch Transform

Use batch transform when you need to do the following:

- Preprocess datasets to remove noise or bias that interferes with training or inference from your dataset.
- Get inferences from large datasets.
- Run inference when you don't need a persistent endpoint.
- Associate input records with inferences to assist the interpretation of results.

**Batch Transform** is a compute job that performs inference on a dataset. To invoke Batch Transform, you will need the following:

- Input path in S3 to the bucket containing the datasets.
- Output path in S3 for the result of the inference.
- Description of computing resources
- S3 URI of the model artifact.

**A Batch Transformation job is only possible on models created through the AWS Console or through the “CreateModel” operation on the CLI or SDK.**

This differs from an endpoint in that endpoints service individual user requests for inference over time.

### Batch Transform (in parallel)

The size of data can be a bottleneck for a transform job. By default, a separate compute resource will be spun up for each individual file in the S3 bucket that you specify. If you wish to split the size of the job even further, you can set the `SplitType` parameter to `"Line"`. To assemble these split jobs back to a single output file, set `AssembleWith` parameters to `"Line"`.

```python
import boto3
client = boto3.client(‘sagemaker’)
response = client.create_transform_job(
    TransformJobName=‘my_job’,
    ModelName=‘target_model_for_inference’,
    TransformInput={
        ‘DataSource’: {
            ‘S3DataSource’: {
            ‘S3DataType’: ‘S3Prefix’,
            ‘S3Uri’: ‘s3://mybucket/inputfolder/’
         }
     },
    ‘SplitType’: ‘Line’
    },
    TransformInput={
        ‘S3OutputPath’: ‘s3://mybucket/outputpath’,
        ‘AssembleWith’: ‘Line’
    },
    TransformResources={
    'InstanceType’: ‘ml.m4.xlarge’,
    ‘InstanceCount’: 1})
}
```

### New Terms

- **Batch Transform** - A compute job that performs inference on a dataset.

### Additional Resources

- If you want to learn more about batch transform, we recommend [Use Batch Transform](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html)

# Batch Transform Demo

## SDK

Programmatically, we do this operation in a similar pattern to what we’re used to. First, we’ll create a **boto3 session.** Then, similar to our operations on endpoints, we create a model object utilizing the i**mage uri** of Amazon’s XGBoost, our **model artifact**, and an **execution role**.

```python
role = get_execution_role()
image_uri = image_uris.retrieve(framework='xgboost',region='us-west-2', version='latest')
model_data = "s3://sagemaker-us-west-2-565094796913/boston-xgboost-HL/output/xgboost-2021-08-31-23-02-30-970/output/model.tar.gz"

model = Model(image_uri=image_uri, model_data=model_data, role=role)
```

Using this model object, we create a **transformer** object. This is used to perform operations on data, which in this case would be inference. We specify machine type, # of machines, and the output of where we want our transformations to go.

```python
transformer = model.transformer(
    instance_count = 1,
    instance_type = 'ml.m4.xlarge',
    output_path = batch_transform_output_path
)
```

Then, you call the transform method to do the job.

```python
transformer.transform(
    data=data_s3_path,
    data_type='S3Prefix',
    content_type='text/csv',
    split_type='Line'
)
```

## AWS Console

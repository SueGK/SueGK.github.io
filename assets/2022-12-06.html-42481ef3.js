import{_ as s,Y as i,Z as r,$ as a,a0 as e,a1 as n,a2 as o,F as d}from"./framework-ba388aaf.js";const l={},h=o(`<figure><img src="https://cdn-images-1.medium.com/max/3600/0*KGB2LDb3-ppXVajd" alt="by Sue" tabindex="0" loading="lazy"><figcaption>by Sue</figcaption></figure><h2 id="create-a-custom-dataset" tabindex="-1"><a class="header-anchor" href="#create-a-custom-dataset" aria-hidden="true">#</a> <strong>Create a custom dataset</strong></h2><p>To create a customized dataset in PyTorch, you should create a subclass of the torch.utils.data.Dataset class and implement the following methods:</p><ul><li><strong>init</strong>(): This method should initialize the dataset and any instance variables that you need. It should accept any arguments necessary to create the dataset.</li><li><strong>len</strong>(): This method should return the length of the dataset (i.e. the number of samples in the dataset).</li><li><strong>getitem</strong>(idx): This method should return the data for the sample with the specified index. The returned data should be a tuple containing the data and the corresponding label for the sample.</li></ul><p>Here is an example of how your custom dataset class might look:</p><pre><code>import torch
from torch.utils.data import Dataset

class CustomDataset(Dataset):
    def__init__(self, data, labels):
        self.data = data
        self.labels = labels

def__len__(self):
        return len(self.labels)

def__getitem__(self, idx):
        return self.data[idx], self.labels[idx]
</code></pre><p>To use your custom dataset, you can create an instance of the class and then pass it to a PyTorch DataLoader object. The DataLoader can then be used to iterate over the dataset and retrieve the samples.</p><pre><code># Create an instance of the CustomDataset class
dataset = CustomDataset(data, labels)

# Create a DataLoader for the dataset
dataloader = torch.utils.data.DataLoader(dataset, batch_size=32, shuffle=True)

# Loop over the dataloader to retrieve the samples
for data, labels in dataloader:
    # Do something with the data and labels
</code></pre>`,8),c={href:"https://pytorch.org/docs/stable/data.html#creating-custom-datasets",target:"_blank",rel:"noopener noreferrer"},u=o(`<h2 id="what-does-dataloader-do" tabindex="-1"><a class="header-anchor" href="#what-does-dataloader-do" aria-hidden="true">#</a> <strong>what does dataloader do?</strong></h2><p>A PyTorch DataLoader is an object that provides a number of benefits when working with large datasets. It is typically used in conjunction with a Dataset object that provides the data that the DataLoader will iterate over.</p><p>The main purpose of the DataLoader is to batch the data from the Dataset and provide it to the model during training. It allows you to specify the batch size and whether or not the data should be shuffled each epoch. This can be useful for training models on large datasets that don&#39;t fit in memory, as it allows the data to be processed in smaller batches.</p><p>In addition to batching the data, the DataLoader can also be used to perform data augmentation and preprocessing on the fly. This can be useful for tasks like image classification, where you may want to apply random transformations to the images in each batch to improve the model&#39;s generalization ability.</p><p>Overall, the DataLoader is an important part of the PyTorch data processing pipeline, and is typically used when training deep learning models on large datasets. It provides an iterator over a dataset, allowing you to train your model on a large dataset by loading only a small portion of the data into memory at a time.</p><p>The DataLoader class takes a dataset and a batch size as input and returns an iterator over the dataset that yields mini-batches of data. You can use the DataLoader class to shuffle the data and define the number of workers that will be used to load the data in parallel.</p><p>One way to use the DataLoader class is with the for loop. Here is an example:</p><pre><code># Import the DataLoader class
from torch.utils.data import DataLoader

# Create a dataset
dataset = SomeDataset()

# Create a DataLoader instance
data_loader = DataLoader(dataset, batch_size=32, shuffle=True)

# Use the DataLoader object like an iterator
for data in data_loader:
    # Get the data
    inputs, labels = data

# Use the data to train your model
    train(model, inputs, labels)
</code></pre><p>The DataLoader class also has a <strong>iter</strong> method that returns an iterator over the dataset, allowing you to use the DataLoader instance in a for loop.</p><pre><code># Create a DataLoader instance
data_loader = DataLoader(dataset, batch_size=32, shuffle=True)

# Get an iterator over the dataset
data_iterator = iter(data_loader)

# Use the iterator in a for loop
for data in data_iterator:
    # Get the data
    inputs, labels = data

# Use the data to train your model
    train(model, inputs, labels)
</code></pre><h2 id="collate-fn-in-dataloader" tabindex="-1"><a class="header-anchor" href="#collate-fn-in-dataloader" aria-hidden="true">#</a> <strong>collate_fn in DataLoader</strong></h2><p>The DataLoader class also provides a way to customize the way data is loaded by defining a collate_fn function. The collate_fn function defines how the data will be combined into a mini-batch. This is useful when your dataset contains data of different sizes, such as images of different sizes.</p><p>Here is an example of using a collate_fn function:</p><pre><code># Import the DataLoader class
from torch.utils.data import DataLoader

# Create a dataset
dataset = SomeDataset()

# Define a collate function
def collate_fn(data):
    # Sort the data in descending order of length
    data.sort(key=lambda x: len(x[0]), reverse=True)

# Unpack the data
    inputs, labels = zip(*data)

# Pad the inputs
    inputs = pad_sequence(inputs, batch_first=True)

return inputs, labels

# Create a DataLoader instance
data_loader = DataLoader(dataset, batch_size=32, collate_fn=collate_fn)

# Use the DataLoader object like an iterator
for data in data_loader:
    # Get the data
    inputs, labels = data

# Use the data to train your model
    train(model, inputs, labels)
</code></pre><p><strong>Flowchat: How does DataLoader process data?</strong></p><figure><img src="https://cdn-images-1.medium.com/max/3600/0*KGB2LDb3-ppXVajd" alt="by Sue" tabindex="0" loading="lazy"><figcaption>by Sue</figcaption></figure><pre><code>num_dataset = 160
batch_size = 16
iteration = num_dataset / batch_size = 10 for i, data in enumerate(train_loader):
inputs, labels = data
</code></pre><p>When using a DataLoader instance in PyTorch, you can iterate over it in a for loop to retrieve the data in mini-batches.</p><p>In this example, the DataLoader instance will use a DataLoaderIter instance to load the data. The DataLoaderIter instance will call the Sampler to generate a list of indices that specify which elements from the dataset should be included in the mini-batch. The DataLoaderIter will then use a DatasetFetcher instance to retrieve the data from the dataset using the generated indices.</p><p>The DatasetFetcher instance will call the <strong>getitem</strong> method of the Dataset to retrieve the data for each index in the list of indices. This will return a list of data samples, where each sample is a tuple containing the input data and the corresponding label.</p><p>Finally, the DataLoaderIter will use the collate_fn function to combine the data samples into a mini-batch. The collate_fn function can be customized to define how the data will be combined into a mini-batch. The output of the collate_fn function is a mini-batch of data that is ready to be used by your model for training or evaluation.</p><p>In summary, when using a DataLoader instance in PyTorch,</p><ul><li>The resulting mini-batch of data is then yielded by the DataLoader instance in a for loop, and then decide whether to use a single or multi-process DataLoaderIter depending on whether multi-processing is used.</li><li>the data is loaded in mini-batches using a Sampler to generate indices</li><li>a DatasetFetcher to retrieve the data from the dataset based on the indices. In the DatasetFetcher, the <strong>getitem</strong>() method of the Dataset is called to get the real data. The data obtained here is a list, where each element is a tuple of (img, label)</li><li>a collate_fn function to combine the data into a mini-batch. So the data here is a list containing two elements, the tenser of img and label respectively.</li></ul>`,23),p={href:"https://twitter.com/Sue_sk79",target:"_blank",rel:"noopener noreferrer"};function m(f,b){const t=d("ExternalLinkIcon");return i(),r("div",null,[h,a("p",null,[e("You can learn more about creating custom datasets in PyTorch in the official PyTorch documentation: "),a("a",c,[e("https://pytorch.org/docs/stable/data.html#creating-custom-datasets"),n(t)])]),u,a("p",null,[e("Thank you for reading this post. If you enjoyed it, please consider following me on Medium and "),a("a",p,[e("twitter"),n(t)]),e(" for more content about productivity tools and AI! 🔥")])])}const _=s(l,[["render",m],["__file","2022-12-06.html.vue"]]);export{_ as default};

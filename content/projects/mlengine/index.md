---
title: "MLEngine"
mermaid: true
---

![Uh oh!](/images/mlengine.gif)

MLEngine is a C++ command line tool for linux aimed to allow easy iteration on different neural network designs

### Description
Written from scratch in C++, MLEngine is a Machine Learning framework that allows a user to implement all sorts of machine 
learning concepts, currently does not support GPUs but bound to change one day. Highly optimized and customizable, a user 
can define what dataset to train on, the name of the model, model dimensions, activations, weight initilization, loss, scoring, 
and various other options that are used during training.

Much of the mathematical code has been lifted from a previous project of mine, specifically, the core is very similair to the 
SingleBlockNeuralNetwork version, though many orginizational changes have been made. That proejct was much more focused on just 
getting the math right, it allowed me to form an understanding of how neural networks worked but was by no means easy to use. 
This project aims to change that, primarily by making it a command line tool and allowing easy iterations of different neural 
network designs.  

### How it Works
MLEngine uses a general top down framework to allow vast customizability and modification while maintaining performance through 
use of templates, the following chart depicts the top down approach and the ownership / level different structs exist on.

<div class="mermaid">
flowchart TD
    state["State"]
    nn["NeuralNetwork"]
    layer["Layer"]
    dataload["DataLoader"]
    actv["Activation"]
    lossmetric["LossMetric"]
    optimizer["Optimizer"]
    mathutils["MathUtils"]
    state --> nn
    state --> dataload
    nn --> layer
    nn --> dataload
    layer --> actv
    layer --> lossmetric
    layer --> optimizer
</div>

- **State**: Responsible for all high-level actions such as saving and loading configs from disk.</li>
- **MathUtils**: Stands alone but is used by many of the structs for highly optimized math utilities.</li>
- **NeuralNetwork**: Manages the memory allocation of the network and training state.</li>
- **Layer**: The workhorse, implementing key machine learning algorithms.</li>
- **DataLoader**: Handles dataset loading from disk and performs augmentations if needed.</li>
- **Activation**: Implements activation functions and their derivatives.</li>
- **LossMetric**: Responsible for scoring and loss functions.</li>
- **Optimizer**: Manages parameter updates and implements various optimization algorithms.</li>

Using these models we can generate some pretty impressive images as can be seen below

![Uh oh!](/images/mandleimage.png)

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li>Index of cards for building neural networks</li>
</ul>

## Index of cards for building neural networks

The [Create neural network](cards/createNeuralNetwork) card offers the possibility of opening an editor to create neural network structures by connecting a few cards.

The backend for building and training neural networks is based on [Keras](https://keras.io/), and almost every layer, constraint, initializer and regularizer has its corresponding card.

**Note:** the current version of Protopipe does not support the parameterization of neural networks yet, but this feature will be available in the future.

* Constraints
    * [Max norm constraint](neural-network-cards/constraint_MaxNorm)
    * [Min max norm constraint](neural-network-cards/constraint_MinMaxNorm)
    * [Non neg constraint](neural-network-cards/constraint_NonNeg)
    * [Unit norm constraint](neural-network-cards/constraint_UnitNorm)
* Initializers
    * [Constant initializer](neural-network-cards/initializer_Constant)
    * [Glorot normal initializer](neural-network-cards/initializer_GlorotNormal)
    * [Glorot uniform initializer](neural-network-cards/initializer_GlorotUniform)
    * [Identity initializer](neural-network-cards/initializer_Identity)
    * [Ones initializer](neural-network-cards/initializer_Ones)
    * [Orthogonal initializer](neural-network-cards/initializer_Orthogonal)
    * [Random normal initializer](neural-network-cards/initializer_RandomNormal)
    * [Random uniform initializer](neural-network-cards/initializer_RandomUniform)
    * [Truncated normal initializer](neural-network-cards/initializer_TruncatedNormal)
    * [Variance scaling initializer](neural-network-cards/initializer_VarianceScaling)
    * [Zeros initializer](neural-network-cards/initializer_Zeros)
* Layer wrappers
    * [Bidirectional layer wrapper](neural-network-cards/layer_Bidirectional)
    * [Time distributed layer wrapper](neural-network-cards/layer_TimeDistributed)
* Layers
    * Activation layers
        * [ELU layer](neural-network-cards/layer_ELU)
        * [Leaky ReLU layer](neural-network-cards/layer_LeakyReLU)
        * [Parametric ReLU layer](neural-network-cards/layer_PReLU)
        * [ReLU layer](neural-network-cards/layer_ReLU)
        * [Softmax layer](neural-network-cards/layer_Softmax)
        * [Thresholded ReLU layer](neural-network-cards/layer_ThresholdedReLU)
    * Attention layers
        * [Additive attention layer](neural-network-cards/layer_AdditiveAttention)
        * [Attention layer](neural-network-cards/layer_Attention)
    * Convolution layers
        * [Convolution 1D layer](neural-network-cards/layer_Conv1D)
        * [Convolution 2D layer](neural-network-cards/layer_Conv2D)
        * [Convolution 2D transpose layer](neural-network-cards/layer_Conv2DTranspose)
        * [Convolution 3D layer](neural-network-cards/layer_Conv3D)
        * [Convolution 3D transpose layer](neural-network-cards/layer_Conv3DTranspose)
        * [Depthwise convolution 2D layer](neural-network-cards/layer_DepthwiseConv2D)
        * [Separable convolution 1D layer](neural-network-cards/layer_SeparableConv1D)
        * [Separable convolution 2D layer](neural-network-cards/layer_SeparableConv2D)
    * Locally connected layers
        * [Locally connected 1D layer](neural-network-cards/layer_LocallyConnected1D)
        * [Locally connected 2D layer](neural-network-cards/layer_LocallyConnected2D)
    * Merge layers
        * [Add layer (2 inputs)](neural-network-cards/mergeLayer2_Add)
        * [Average layer (2 inputs)](neural-network-cards/mergeLayer2_Average)
        * [Concatenate layer (2 inputs)](neural-network-cards/mergeLayer2_Concatenate)
        * [Dot layer (2 inputs)](neural-network-cards/mergeLayer2_Dot)
        * [Maximum layer (2 inputs)](neural-network-cards/mergeLayer2_Maximum)
        * [Minimum layer (2 inputs)](neural-network-cards/mergeLayer2_Minimum)
        * [Multiply layer (2 inputs)](neural-network-cards/mergeLayer2_Multiply)
        * [Subtract layer (2 inputs)](neural-network-cards/mergeLayer2_Subtract)
    * Normalization layers
        * [Batch normalization layer](neural-network-cards/layer_BatchNormalization)
        * [Layer normalization layer](neural-network-cards/layer_LayerNormalization)
    * Pooling layers
        * [Average pooling 1D layer](neural-network-cards/layer_AveragePooling1D)
        * [Average pooling 2D layer](neural-network-cards/layer_AveragePooling2D)
        * [Average pooling 3D layer](neural-network-cards/layer_AveragePooling3D)
        * [Global average pooling 1D layer](neural-network-cards/layer_GlobalAveragePooling1D)
        * [Global average pooling 2D layer](neural-network-cards/layer_GlobalAveragePooling2D)
        * [Global average pooling 3D layer](neural-network-cards/layer_GlobalAveragePooling3D)
        * [Global max pooling 1D layer](neural-network-cards/layer_GlobalMaxPooling1D)
        * [Global max pooling 2D layer](neural-network-cards/layer_GlobalMaxPooling2D)
        * [Global max pooling 3D layer](neural-network-cards/layer_GlobalMaxPooling3D)
        * [Max pooling 1D layer](neural-network-cards/layer_MaxPooling1D)
        * [Max pooling 2D layer](neural-network-cards/layer_MaxPooling2D)
        * [Max pooling 3D layer](neural-network-cards/layer_MaxPooling3D)
    * Regularization layers
        * [Activity regularization layer](neural-network-cards/layer_ActivityRegularization)
        * [Alpha dropout layer](neural-network-cards/layer_AlphaDropout)
        * [Dropout layer](neural-network-cards/layer_Dropout)
        * [Gaussian dropout layer](neural-network-cards/layer_GaussianDropout)
        * [Gaussian noise layer](neural-network-cards/layer_GaussianNoise)
        * [Spatial dropout 1D layer](neural-network-cards/layer_SpatialDropout1D)
        * [Spatial dropout 2D layer](neural-network-cards/layer_SpatialDropout2D)
        * [Spatial dropout 3D layer](neural-network-cards/layer_SpatialDropout3D)
    * Reshaping layers
        * [Cropping 1D layer](neural-network-cards/layer_Cropping1D)
        * [Cropping 2D layer](neural-network-cards/layer_Cropping2D)
        * [Cropping 3D layer](neural-network-cards/layer_Cropping3D)
        * [Flatten layer](neural-network-cards/layer_Flatten)
        * [Permute layer](neural-network-cards/layer_Permute)
        * [Repeat vector layer](neural-network-cards/layer_RepeatVector)
        * [Reshape layer](neural-network-cards/layer_Reshape)
        * [Up sampling 1D layer](neural-network-cards/layer_UpSampling1D)
        * [Up sampling 2D layer](neural-network-cards/layer_UpSampling2D)
        * [Up sampling 3D layer](neural-network-cards/layer_UpSampling3D)
        * [Zero padding 1D layer](neural-network-cards/layer_ZeroPadding1D)
        * [Zero padding 2D layer](neural-network-cards/layer_ZeroPadding2D)
        * [Zero padding 3D layer](neural-network-cards/layer_ZeroPadding3D)
    * [Activation layer](neural-network-cards/layer_Activation)
    * [Dense layer](neural-network-cards/layer_Dense)
    * [Embedding layer](neural-network-cards/layer_Embedding)
    * [Masking layer](neural-network-cards/layer_Masking)
* Regularizers
    * [L1 regularizer](neural-network-cards/regularizer_l1)
    * [L1 L2 regularizer](neural-network-cards/regularizer_l1_l2)
    * [L2 regularizer](neural-network-cards/regularizer_l2)
* [Input](neural-network-cards/input)
* [Output](neural-network-cards/output)

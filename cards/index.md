<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li>Index of cards</li>
</ul>

## Index of cards

Cards in Protopipe are like functions in any common programming language: they receive some inputs, do something and then return some outputs.

* Charts
    * [Create line chart](cards/createLineChart)
    * [Create vertical bar chart](cards/createVerticalBarChart)
    * [Plot chart](cards/plotChart)
* DynamicObjects
    * Add
        * [Add list of Boolean to DynamicObject](cards/addListToDynamicObject(Boolean))
        * [Add list of Float to DynamicObject](cards/addListToDynamicObject(Float))
        * [Add list of Image to DynamicObject](cards/addListToDynamicObject(Image))
        * [Add list of Integer to DynamicObject](cards/addListToDynamicObject(Integer))
        * [Add list of NeuralNetworkLoss to DynamicObject](cards/addListToDynamicObject(NeuralNetworkLoss))
        * [Add list of NeuralNetworkMetric to DynamicObject](cards/addListToDynamicObject(NeuralNetworkMetric))
        * [Add list of String to DynamicObject](cards/addListToDynamicObject(String))
        * [Add list of Tensor to DynamicObject](cards/addListToDynamicObject(Tensor))
        * [Add Boolean to DynamicObject](cards/addToDynamicObject(Boolean))
        * [Add Float to DynamicObject](cards/addToDynamicObject(Float))
        * [Add Image to DynamicObject](cards/addToDynamicObject(Image))
        * [Add Integer to DynamicObject](cards/addToDynamicObject(Integer))
        * [Add NeuralNetworkLoss to DynamicObject](cards/addToDynamicObject(NeuralNetworkLoss))
        * [Add NeuralNetworkMetric to DynamicObject](cards/addToDynamicObject(NeuralNetworkMetric))
        * [Add String to DynamicObject](cards/addToDynamicObject(String))
        * [Add Tensor to DynamicObject](cards/addToDynamicObject(Tensor))
    * Get
        * [Get Boolean from DynamicObject](cards/getFromDynamicObject(Boolean))
        * [Get Float from DynamicObject](cards/getFromDynamicObject(Float))
        * [Get Image from DynamicObject](cards/getFromDynamicObject(Image))
        * [Get Integer from DynamicObject](cards/getFromDynamicObject(Integer))
        * [Get String from DynamicObject](cards/getFromDynamicObject(String))
        * [Get Tensor from DynamicObject](cards/getFromDynamicObject(Tensor))
        * [Get list of Boolean from DynamicObject](cards/getListFromDynamicObject(Boolean))
        * [Get list of Float from DynamicObject](cards/getListFromDynamicObject(Float))
        * [Get list of Image from DynamicObject](cards/getListFromDynamicObject(Image))
        * [Get list of Integer from DynamicObject](cards/getListFromDynamicObject(Integer))
        * [Get list of String from DynamicObject](cards/getListFromDynamicObject(String))
        * [Get list of Tensor from DynamicObject](cards/getListFromDynamicObject(Tensor))
* Files and formats
    * [Open file](cards/openFile)
    * [Read as CSV](cards/readAsCSV)
* Lists
    * [Add Boolean to list](cards/addToList(Boolean))
    * [Add Float to list](cards/addToList(Float))
    * [Add Image to list](cards/addToList(Image))
    * [Add Integer to list](cards/addToList(Integer))
    * [Add NeuralNetworkMetric to list](cards/addToList(NeuralNetworkMetric))
    * [Add String to list](cards/addToList(String))
    * [Add Tensor to list](cards/addToList(Tensor))
* Loss functions
    * [Accuracy](cards/accuracy)
    * [Mean absolute error](cards/meanAbsoluteError)
* Models
    * Neural networks
        * Losses
            * [Create neural network loss function](cards/createNeuralNetworkLossFunction)
        * Metrics
            * [Create neural network metric function](cards/createNeuralNetworkMetricFunction)
        * Optimizers
            * [Create SGD neural network optimizer](cards/createSGDNeuralNetworkOptimizer)
        * [Create neural network](cards/createNeuralNetwork)
        * [Evaluate multi-IO neural network model](cards/evaluateMultiIONeuralNetworkModel)
        * [Evaluate multi-input neural network model](cards/evaluateMultiInputNeuralNetworkModel)
        * [Evaluate multi-output neural network model](cards/evaluateMultiOutputNeuralNetworkModel)
        * [Evaluate neural network model](cards/evaluateNeuralNetworkModel)
        * [Train multi-IO neural network](cards/trainMultiIONeuralNetwork)
        * [Train multi-input neural network](cards/trainMultiInputNeuralNetwork)
        * [Train multi-output neural network](cards/trainMultiOutputNeuralNetwork)
        * [Train neural network](cards/trainNeuralNetwork)
    * [Multi-IO predict](cards/multiIOPredict)
    * [Multi-input predict](cards/multiInputPredict)
    * [Multi-output predict](cards/multiOutputPredict)
    * [Predict](cards/predict)
* Normalization
    * [Columns to proportions](cards/columnsToProportions)
    * [Scale columns to a range](cards/scaleColumnsToARange)
    * [Standard scale columns](cards/standardScaleColumns)
* Parameters
    * [Boolean parameter](cards/parameterBoolean)
    * [Float parameter](cards/parameterFloat)
    * [Integer parameter](cards/parameterInteger)
* Returns
    * [Return float](cards/returnFloat)
* Statistics
    * [Mean](cards/mean)
* Tables
    * Conversions
        * [List of Boolean to table](cards/listToTable(Boolean))
        * [List of Float to table](cards/listToTable(Float))
        * [List of Integer to table](cards/listToTable(Integer))
        * [List of String to table](cards/listToTable(String))
    * [Group and count](cards/groupAndCount)
    * [One-hot encode columns](cards/oneHotEncodeColumns)
    * [Shuffle rows](cards/shuffleRows)
    * [Split into X and Y by columns](cards/splitIntoXAndYByColumns)
* Validation
    * [K-fold cross-validation](cards/kFoldCrossValidation)
* Variables
    * Getters
        * [Get float](cards/getFloat_1)
        * [Get list of float](cards/getFloat_n)
    * Setters
        * [Set float](cards/setFloat_1)
        * [Set list of float](cards/setFloat_n)


**Note:** the neural network editor has its own set of cards, available [here](neural_network_cards/).
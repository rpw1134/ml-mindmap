import type { MindmapData } from '../types';

const data: MindmapData = {
  papers: [
    {
      id: 'attention-is-all-you-need',
      arxivId: '1706.03762',
      title: 'Attention Is All You Need',
      authors: ['Vaswani', 'Shazeer', 'Parmar', 'Uszkoreit', 'Jones', 'Gomez', 'Kaiser', 'Polosukhin'],
      abstract:
        'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.',
      year: 2017,
      tags: ['attention', 'transformer', 'nlp'],
      parentGroup: 'g-transformers',
      position: { x: 200, y: 150 },
    },
    {
      id: 'bert',
      arxivId: '1810.04805',
      title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
      authors: ['Devlin', 'Chang', 'Lee', 'Toutanova'],
      abstract:
        'We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result, the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks, such as question answering and language inference, without substantial task-specific architecture modifications. BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).',
      year: 2018,
      tags: ['pretraining', 'transformer', 'nlp'],
      parentGroup: 'g-transformers',
      position: { x: 600, y: 150 },
    },
    {
      id: 'gpt3',
      arxivId: '2005.14165',
      title: 'Language Models are Few-Shot Learners',
      authors: ['Brown', 'Mann', 'Ryder', 'et al.'],
      abstract:
        'Recent work has demonstrated substantial gains on many NLP tasks and benchmarks by pre-training on a large corpus of text followed by fine-tuning on a specific task. While typically task-agnostic in architecture, this method still requires task-specific fine-tuning datasets of thousands or tens of thousands of examples. By contrast, humans can generally perform a new language task from only a few examples or from simple instructions - something which current NLP systems still largely struggle to do. Here we show that scaling up language models greatly improves task-agnostic, few-shot performance, sometimes even reaching competitiveness with prior state-of-the-art fine-tuning approaches. Specifically, we train GPT-3, an autoregressive language model with 175 billion parameters, 10x more than any previous non-sparse language model, and test its performance in the few-shot setting. For all tasks, GPT-3 is applied without any gradient updates or fine-tuning, with tasks and few-shot demonstrations specified purely via text interaction with the model. GPT-3 achieves strong performance on many NLP datasets, including translation, question-answering, and cloze tasks, as well as several tasks that require on-the-fly reasoning or domain adaptation, such as unscrambling words, using a novel word in a sentence, or performing 3-digit arithmetic.',
      year: 2020,
      tags: ['pretraining', 'transformer', 'scaling', 'nlp'],
      position: { x: 600, y: 420 },
    },
    {
      id: 'word2vec',
      arxivId: '1301.3781',
      title: 'Efficient Estimation of Word Representations in Vector Space',
      authors: ['Mikolov', 'Chen', 'Corrado', 'Dean'],
      abstract:
        'We propose two novel model architectures for computing continuous vector representations of words from very large data sets. The quality of these representations is measured in a word similarity task, and the results are compared to the previously best performing techniques based on different types of neural networks. We observe large improvements in accuracy at much lower computational cost, i.e. it takes less than a day to learn high quality word vectors from a 1.6 billion words data set. Furthermore, we show that these vectors provide state-of-the-art performance on our test set for measuring syntactic and semantic word similarities.',
      year: 2013,
      tags: ['embeddings', 'nlp', 'word2vec'],
      parentGroup: 'g-embeddings',
      position: { x: 200, y: 420 },
    },
    {
      id: 'vae',
      arxivId: '1312.6114',
      title: 'Auto-Encoding Variational Bayes',
      authors: ['Kingma', 'Welling'],
      abstract:
        'How can we perform efficient inference and learning in directed probabilistic models, in the presence of continuous latent variables with intractable posterior distributions, and large datasets? We introduce a stochastic variational inference and learning algorithm that scales to large datasets and, under some mild differentiability conditions, even works in the intractable case. Our contributions are two-fold. First, we show that a reparameterization of the variational lower bound yields a lower bound estimator that can be straightforwardly optimized using standard stochastic gradient methods. Second, we show that for i.i.d. datasets with continuous latent variables per datapoint, posterior inference can be made especially efficient by fitting an approximate inference model (also called a recognition model) to the intractable posterior using the proposed lower bound estimator. Theoretical advantages are reflected in experimental results.',
      year: 2013,
      tags: ['vae', 'generative', 'latent-space', 'variational-inference'],
      parentGroup: 'g-autoencoders',
      position: { x: 1660, y: 150 },
    },
    {
      id: 'vq-vae',
      arxivId: '1711.00937',
      title: 'Neural Discrete Representation Learning',
      authors: ['van den Oord', 'Vinyals', 'Kavukcuoglu'],
      abstract:
        'Learning useful representations without supervision remains a key challenge in machine learning. In this paper, we propose a simple yet powerful generative model that learns such discrete representations. Our model, the Vector Quantised-Variational AutoEncoder (VQ-VAE), differs from VAEs in two key ways: the encoder network outputs discrete, rather than continuous, codes; and the prior is learnt rather than static. In order to learn a discrete latent representation, we incorporate ideas from vector quantisation (VQ). Using the VQ method allows the model to circumvent issues of "posterior collapse" -- where the latents are ignored when they are paired with a powerful autoregressive decoder -- typically observed in the VAE framework. Pairing these representations with an autoregressive prior, the model can generate high quality images, videos, and speech as well as doing high quality speaker conversion and unsupervised learning of phonemes, providing further evidence of the utility of the learnt representations.',
      year: 2017,
      tags: ['vq-vae', 'discrete-representation', 'generative', 'codebook'],
      parentGroup: 'g-autoencoders',
      position: { x: 1910, y: 150 },
    },
    {
      id: 'conditional-vae',
      arxivId: '2102.12037',
      title: 'Conditional Image Generation by Conditioning Variational Auto-Encoders',
      authors: ['Harvey', 'Naderiparizi', 'Wood'],
      abstract:
        'We present a conditional variational auto-encoder (VAE) which, to avoid the substantial cost of training from scratch, uses an architecture and training objective capable of leveraging a foundation model in the form of a pretrained unconditional VAE. To train the conditional VAE, we only need to train an artifact to perform amortized inference over the unconditional VAE\'s latent variables given a conditioning input. We demonstrate our approach on tasks including image inpainting, for which it outperforms state-of-the-art GAN-based approaches at faithfully representing the inherent uncertainty. We conclude by describing a possible application of our inpainting model, in which it is used to perform Bayesian experimental design for the purpose of guiding a sensor.',
      year: 2021,
      tags: ['vae', 'conditional-generation', 'image-inpainting', 'generative'],
      parentGroup: 'g-autoencoders',
      position: { x: 1720, y: 350 },
    },
    {
      id: 'mdrnn',
      arxivId: '0705.2011',
      title: 'Multi-Dimensional Recurrent Neural Networks',
      authors: ['Graves', 'Fernandez', 'Schmidhuber'],
      abstract:
        'Recurrent neural networks (RNNs) have proved effective at one dimensional sequence learning tasks, such as speech and online handwriting recognition. Some of the properties that make RNNs suitable for such tasks, for example robustness to input warping, and the ability to access contextual information, are also desirable in multidimensional domains. However, there has so far been no direct way of applying RNNs to data with more than one spatio-temporal dimension. This paper introduces multi-dimensional recurrent neural networks (MDRNNs), thereby extending the potential applicability of RNNs to vision, video processing, medical imaging and many other areas, while avoiding the scaling problems that have plagued other multi-dimensional models. Experimental results are provided for two image segmentation tasks.',
      year: 2007,
      tags: ['rnn', 'sequence-modeling', 'multi-dimensional'],
      parentGroup: 'g-rnns',
      position: { x: 1090, y: 420 },
    },
    {
      id: 'pixel-rnn',
      arxivId: '1601.06759',
      title: 'Pixel Recurrent Neural Networks',
      authors: ['van den Oord', 'Kalchbrenner', 'Kavukcuoglu'],
      abstract:
        'Modeling the distribution of natural images is a landmark problem in unsupervised learning. This task requires an image model that is at once expressive, tractable and scalable. We present a deep neural network that sequentially predicts the pixels in an image along the two spatial dimensions. Our method models the discrete probability of the raw pixel values and encodes the complete set of dependencies in the image. Architectural novelties include fast two-dimensional recurrent layers and an effective use of residual connections in deep recurrent networks. We achieve log-likelihood scores on natural images that are considerably better than the previous state of the art. Our main results also provide benchmarks on the diverse ImageNet dataset. Samples generated from the model appear crisp, varied and globally coherent.',
      year: 2016,
      tags: ['rnn', 'generative', 'image-generation', 'autoregressive'],
      parentGroup: 'g-rnns',
      position: { x: 1090, y: 620 },
    },
    {
      id: 'pixel-cnn-plus-plus',
      arxivId: '1701.05517',
      title: 'PixelCNN++: Improving the PixelCNN with Discretized Logistic Mixture Likelihood and Other Modifications',
      authors: ['Salimans', 'Karpathy', 'Chen', 'Kingma'],
      abstract:
        'PixelCNNs are a recently proposed class of powerful generative models with tractable likelihood that are also easy to sample from. We present a number of improvements, making training faster, sampling faster, and the likelihood lower using six changes to the architecture: we use a discretized logistic mixture likelihood on the pixels, rather than a 256-way softmax, which we find to be faster and to produce better test log-likelihoods; we condition on whole pixels, rather than R, G, and B sub-pixels, simplifying the model structure; we use downsampling to efficiently capture structure at multiple resolutions; we introduce additional short-cut connections to further speed up optimization; we regularize the model using dropout. Our model achieves state-of-the-art log-likelihood scores on CIFAR-10 and ImageNet.',
      year: 2017,
      tags: ['generative', 'image-generation', 'autoregressive', 'cnn'],
      parentGroup: 'g-cnns',
      position: { x: 1090, y: 920 },
    },
    {
      id: 'unet',
      arxivId: '1505.04597',
      title: 'U-Net: Convolutional Networks for Biomedical Image Segmentation',
      authors: ['Ronneberger', 'Fischer', 'Brox'],
      abstract:
        'There is large consent that successful training of deep networks requires many thousand annotated training samples. In this paper, we present a network and training strategy that relies on the strong use of data augmentation to use the available annotated samples more efficiently. The architecture consists of a contracting path to capture context and a symmetric expanding path that enables precise localization. We show that such a network can be trained end-to-end from very few images and outperforms the prior best method (a sliding-window convolutional network) on the ISBI challenge for segmentation of neuronal structures in electron microscopic stacks. Using the same network trained on transmitted light microscopy images (phase contrast and DIC) we won the ISBI cell tracking challenge 2015 in these categories by a large margin. Moreover, the network is fast. Segmentation of a 512x512 image takes less than a second on a recent GPU.',
      year: 2015,
      tags: ['cnn', 'segmentation', 'encoder-decoder', 'biomedical'],
      parentGroup: 'g-cnns',
      position: { x: 1090, y: 1020 },
    },
    {
      id: 'gan',
      arxivId: '1406.2661',
      title: 'Generative Adversarial Networks',
      authors: ['Goodfellow', 'Pouget-Abadie', 'Mirza', 'Xu', 'Warde-Farley', 'Ozair', 'Courville', 'Bengio'],
      abstract:
        'We propose a new framework for estimating generative models via an adversarial process, in which we simultaneously train two models: a generative model G that captures the data distribution, and a discriminative model D that estimates the probability that a sample came from the training data rather than G. The training procedure for G is to maximize the probability of D making a mistake. This framework corresponds to a minimax two-player game. In the space of arbitrary functions G and D, a unique solution exists, with G recovering the training data distribution and D equal to 1/2 everywhere. In the case where G and D are defined by multilayer perceptrons, the entire system can be trained with backpropagation. There is no need for any Markov chains or unrolled approximate inference networks during either training or generation of samples. Experiments demonstrate the potential of the framework through qualitative and quantitative evaluation of the generated samples.',
      year: 2014,
      tags: ['generative', 'adversarial', 'image-generation'],
      parentGroup: 'g-autoencoders',
      position: { x: 1910, y: 350 },
    },
    {
      id: 'ddpm',
      arxivId: '2006.11239',
      title: 'Denoising Diffusion Probabilistic Models',
      authors: ['Ho', 'Jain', 'Abbeel'],
      abstract:
        'We present high quality image synthesis results using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics. Our best results are obtained by training on a weighted variational bound designed according to a novel connection between diffusion probabilistic models and denoising score matching with Langevin dynamics, and our models naturally admit a progressive lossy decompression scheme that can be interpreted as a generalization of autoregressive decoding. On the unconditional CIFAR 10 dataset, we obtain an Inception score of 9.46 and a state-of-the-art FID score of 3.17. On 256x256 LSUN, we obtain sample quality similar to ProgressiveGAN.',
      year: 2020,
      tags: ['diffusion', 'generative', 'image-generation', 'denoising', 'score-matching'],
      parentGroup: 'g-diffusion',
      position: { x: 1660, y: 620 },
    },
    {
      id: 'figaro',
      arxivId: '2201.10936',
      title: 'FIGARO: Generating Symbolic Music with Fine-Grained Artistic Control',
      authors: ['von Rütte', 'Biggio', 'Kilcher', 'Hofmann'],
      abstract:
        'Generating music with deep neural networks has been an area of active research in recent years. While the quality of generated samples has been steadily increasing, most methods are only able to exert minimal control over the generated sequence, if any. We propose the self-supervised description-to-sequence task, which allows for fine-grained controllable generation on a global level. We do so by extracting high-level features about the target sequence and learning the conditional distribution of sequences given the corresponding high-level description in a sequence-to-sequence modelling setup. We train FIGARO (FIne-grained music Generation via Attention-based, RObust control) by applying description-to-sequence modelling to symbolic music. By combining learned high level features with domain knowledge, which acts as a strong inductive bias, the model achieves state-of-the-art results in controllable symbolic music generation and generalizes well beyond the training distribution.',
      year: 2022,
      tags: ['music-generation', 'symbolic-music', 'transformer', 'controllable-generation'],
      parentGroup: 'g-music-generation',
      position: { x: 2320, y: 420 },
    },
    {
      id: 'gpt2',
      title: 'Language Models are Unsupervised Multitask Learners',
      authors: ['Radford', 'Wu', 'Child', 'Luan', 'Amodei', 'Sutskever'],
      abstract:
        'Natural language processing tasks, such as question answering, machine translation, reading comprehension, and summarization, are typically approached with supervised learning on task-specific datasets. We demonstrate that language models begin to learn these tasks without any explicit supervision when trained on a new dataset of millions of webpages called WebText. When conditioned on a document plus questions, the answers generated by the language model reach 55 F1 on the CoQA dataset - matching or exceeding the performance of 3 out of 4 baseline systems without using the 127,000+ training examples. The capacity of the language model is essential to the success of zero-shot task transfer and increasing it improves performance in a log-linear fashion across tasks. Our largest model, GPT-2, is a 1.5B parameter Transformer that achieves state of the art results on 7 out of 8 tested language modeling datasets in a zero-shot setting but still underfits WebText.',
      year: 2019,
      tags: ['transformer', 'language-model', 'pretraining', 'zero-shot'],
      parentGroup: 'g-transformers',
      position: { x: 400, y: 150 },
    },
    {
      id: 'alexnet',
      arxivId: '1409.1556',
      title: 'ImageNet Classification with Deep Convolutional Neural Networks',
      authors: ['Krizhevsky', 'Sutskever', 'Hinton'],
      abstract:
        'We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0% which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and three fully-connected layers with a final 1000-way softmax. To make training faster, we used non-saturating neurons and a very efficient GPU implementation of the convolution operation. To reduce overfitting in the fully-connected layers we employed a recently-developed regularization method called "dropout" that proved to be very effective.',
      year: 2012,
      tags: ['cnn', 'imagenet', 'deep-learning', 'classification'],
      parentGroup: 'g-cnns',
      position: { x: 1340, y: 920 },
    },
    {
      id: 'resnet',
      arxivId: '1512.03385',
      title: 'Deep Residual Learning for Image Recognition',
      authors: ['He', 'Zhang', 'Ren', 'Sun'],
      abstract:
        'Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers—8× deeper than VGG nets but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task.',
      year: 2015,
      tags: ['cnn', 'residual-connections', 'deep-learning', 'imagenet'],
      parentGroup: 'g-cnns',
      position: { x: 1340, y: 1020 },
    },
    {
      id: 'ldm',
      arxivId: '2112.10752',
      title: 'High-Resolution Image Synthesis with Latent Diffusion Models',
      authors: ['Rombach', 'Blattmann', 'Lorenz', 'Esser', 'Ommer'],
      abstract:
        'By decomposing the image formation process into a sequential application of denoising autoencoders, diffusion models (DMs) achieve state-of-the-art synthesis results on image data and beyond. Additionally, their formulation allows for a guiding mechanism to control the image generation process without retraining. However, since these models typically operate directly in pixel space, optimization of powerful DMs often consumes hundreds of GPU days and inference is expensive due to sequential evaluations. To enable DM training on limited computational resources while retaining their quality and flexibility, we apply them in the latent space of powerful pretrained autoencoders. In contrast to previous work, training diffusion models on such a representation allows for the first time to reach a near-optimal point between complexity reduction and detail preservation, greatly boosting visual fidelity.',
      year: 2022,
      tags: ['diffusion', 'latent-space', 'image-generation', 'stable-diffusion'],
      parentGroup: 'g-diffusion',
      position: { x: 1660, y: 750 },
    },
    {
      id: 'clip',
      arxivId: '2103.00020',
      title: 'Learning Transferable Visual Models From Natural Language Supervision',
      authors: ['Radford', 'Kim', 'Hallacy', 'Ramesh', 'Goh', 'Agarwal', 'Sastry', 'Askell', 'Mishkin', 'Clark', 'Krueger', 'Sutskever'],
      abstract:
        'State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This restricted form of supervision limits their generality and usability since additional labeled data is needed to specify any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400 million (image, text) pairs.',
      year: 2021,
      tags: ['vision-language', 'contrastive-learning', 'zero-shot', 'multimodal'],
      parentGroup: 'g-vision-language',
      position: { x: 2320, y: 700 },
    },
    {
      id: 'classifier-free-diffusion-guidance',
      arxivId: '2207.12598',
      title: 'Classifier-Free Diffusion Guidance',
      authors: ['Ho', 'Salimans'],
      abstract:
        'Classifier guidance is a recently introduced method to trade off mode coverage and sample fidelity in conditional diffusion models post training, in the same spirit as low temperature sampling or truncation in other types of generative models. Classifier guidance combines the score estimate of a diffusion model with the gradient of an image classifier and thereby requires training an image classifier separate from the diffusion model. It also raises the question of whether guidance can be performed without a classifier. We show that guidance can be indeed performed by a pure generative model without such a classifier: in what we call classifier-free guidance, we jointly train a conditional and an unconditional diffusion model, and we combine the resulting conditional and unconditional score estimates to attain a trade-off between sample quality and diversity similar to that obtained using classifier guidance.',
      year: 2022,
      tags: ['diffusion', 'generative', 'conditional-generation', 'guidance', 'classifier-free'],
      parentGroup: 'g-diffusion',
      position: { x: 1910, y: 620 },
    },
  ],
  edges: [
    {
      id: 'e-attention-bert',
      source: 'attention-is-all-you-need',
      target: 'bert',
      // label: 'inspired',  // uncomment to add a relationship label
      relationship: 'BERT adopts the Transformer encoder architecture introduced in Attention Is All You Need.',
    },
    {
      id: 'e-attention-gpt3',
      source: 'attention-is-all-you-need',
      target: 'gpt3',
      relationship: 'GPT-3 scales the Transformer decoder from Attention Is All You Need to 175B parameters.',
    },
    {
      id: 'e-word2vec-bert',
      source: 'word2vec',
      target: 'bert',
      relationship: 'BERT replaces static Word2Vec embeddings with deep contextual representations.',
    },
    {
      id: 'e-vae-vqvae',
      source: 'vae',
      target: 'vq-vae',
      relationship: 'VQ-VAE replaces the VAE\'s continuous latent space with a discrete vector-quantized codebook.',
    },
    {
      id: 'e-vae-conditionalvae',
      source: 'vae',
      target: 'conditional-vae',
      relationship: 'Conditional VAE builds on the VAE framework by conditioning inference on an additional input, using a pretrained unconditional VAE as its foundation.',
    },
    {
      id: 'e-gan-conditionalvae',
      source: 'gan',
      target: 'conditional-vae',
      relationship: 'Conditional VAE is proposed as an alternative to GAN-based inpainting, outperforming GANs at representing inherent uncertainty.',
    },
    {
      id: 'e-vqvae-figaro',
      source: 'vq-vae',
      target: 'figaro',
      relationship: 'FIGARO uses VQ-VAE-style discrete token representations to encode musical structure.',
    },
    {
      id: 'e-mdrnn-pixelrnn',
      source: 'mdrnn',
      target: 'pixel-rnn',
      relationship: 'Pixel RNN applies multi-dimensional recurrent processing from MDRNN to image pixel generation.',
    },
    {
      id: 'e-pixelrnn-pixelcnn',
      source: 'pixel-rnn',
      target: 'pixel-cnn-plus-plus',
      relationship: 'PixelCNN++ builds on the autoregressive pixel-generation framework of PixelRNN, replacing recurrent layers with masked convolutions and improving likelihood modeling with a discretized logistic mixture.',
    },
    {
      id: 'e-pixelrnn-vqvae',
      source: 'pixel-rnn',
      target: 'vq-vae',
      relationship: 'VQ-VAE uses a PixelRNN-style autoregressive prior to learn the distribution over its discrete codes.',
    },
    {
      id: 'e-vae-ddpm',
      source: 'vae',
      target: 'ddpm',
      relationship: 'DDPM frames diffusion as a variational latent-variable model, optimizing a bound on the data likelihood analogous to the VAE ELBO.',
    },
    {
      id: 'e-gan-ddpm',
      source: 'gan',
      target: 'ddpm',
      relationship: 'DDPM offers a GAN-free path to high-fidelity image synthesis, matching GAN sample quality without adversarial training.',
    },
    {
      id: 'e-unet-ddpm',
      source: 'unet',
      target: 'ddpm',
      relationship: 'DDPM uses a U-Net as its denoising network, leveraging the encoder-decoder architecture with skip connections to predict noise at each diffusion timestep.',
    },
    {
      id: 'e-ddpm-classifier-free-guidance',
      source: 'ddpm',
      target: 'classifier-free-diffusion-guidance',
      relationship: 'Classifier-Free Diffusion Guidance extends DDPM by jointly training conditional and unconditional score networks, enabling high-quality conditional generation without a separate classifier.',
    },
    {
      id: 'e-attention-gpt2',
      source: 'attention-is-all-you-need',
      target: 'gpt2',
      relationship: 'GPT-2 is a large Transformer decoder pre-trained on web text, directly applying the architecture from Attention Is All You Need to language modeling.',
    },
    {
      id: 'e-gpt2-gpt3',
      source: 'gpt2',
      target: 'gpt3',
      relationship: 'GPT-3 scales GPT-2\'s architecture to 175B parameters, demonstrating emergent few-shot abilities that GPT-2 only hinted at.',
    },
    {
      id: 'e-alexnet-resnet',
      source: 'alexnet',
      target: 'resnet',
      relationship: 'ResNet builds on the deep CNN lineage AlexNet established, solving the vanishing gradient problem that limited AlexNet-style depth.',
    },
    {
      id: 'e-resnet-unet',
      source: 'resnet',
      target: 'unet',
      relationship: 'Modern U-Net backbones (as used in DDPM) replace plain conv blocks with ResNet-style residual blocks for more stable deep training.',
    },
    {
      id: 'e-vae-ldm',
      source: 'vae',
      target: 'ldm',
      relationship: 'LDM first compresses images into a VAE latent space, then trains a diffusion model there — dramatically reducing compute vs. pixel-space diffusion.',
    },
    {
      id: 'e-ddpm-ldm',
      source: 'ddpm',
      target: 'ldm',
      relationship: 'LDM applies the DDPM denoising objective inside a compressed latent space rather than in pixel space.',
    },
    {
      id: 'e-classifierfree-ldm',
      source: 'classifier-free-diffusion-guidance',
      target: 'ldm',
      relationship: 'LDM uses classifier-free guidance at inference time to steer generation toward a text or image condition.',
    },
    {
      id: 'e-clip-ldm',
      source: 'clip',
      target: 'ldm',
      relationship: 'Stable Diffusion (LDM) uses a frozen CLIP text encoder to condition the denoising U-Net on natural language prompts.',
    },
    {
      id: 'e-attention-clip',
      source: 'attention-is-all-you-need',
      target: 'clip',
      relationship: 'CLIP\'s text encoder is a Transformer, applying the architecture from Attention Is All You Need to joint vision-language representation learning.',
    },
  ],
  groups: [
    {
      id: 'g-transformers',
      label: 'Transformers',
      color: '#a87ee0',
      position: { x: 140, y: 80 },
      size: { width: 640, height: 200 }, // right edge 780 clears BERT (600 + 160 + 20 padding)
    },
    {
      id: 'g-embeddings',
      label: 'Embeddings',
      color: '#44b4d8',
      position: { x: 140, y: 350 },
      size: { width: 240, height: 200 }, // right edge 380 clears word2vec (200 + 160 + 20 padding)
    },
    {
      id: 'g-rnns',
      label: 'RNNs',
      color: '#d46060',
      position: { x: 1030, y: 350 },
      size: { width: 240, height: 370 }, // right edge 1270 clears papers (1090 + 160 + 20); bottom 720 clears PixelRNN (620 + 80 + 20)
    },
    {
      id: 'g-cnns',
      label: 'CNNs',
      color: '#d88c42',
      position: { x: 1030, y: 850 },
      size: { width: 490, height: 270 }, // right edge 1520 clears AlexNet/ResNet (1340 + 160 + 20); bottom 1120 clears UNet/ResNet (1020 + 80 + 20)
    },
    {
      id: 'g-autoencoders',
      label: 'Autoencoders',
      color: '#38c08a',
      position: { x: 1600, y: 80 },
      size: { width: 490, height: 370 }, // right edge 2090 clears VQ-VAE/GAN (1910 + 160 + 20); bottom 450 clears conditional-vae/gan (350 + 80 + 20)
    },
    {
      id: 'g-diffusion',
      label: 'Diffusion Models',
      color: '#d458a0',
      position: { x: 1600, y: 580 },
      size: { width: 490, height: 270 }, // right edge 2090 clears classifier-free (1910 + 160 + 20); bottom 850 clears LDM (750 + 80 + 20)
    },
    {
      id: 'g-music-generation',
      label: 'Music Generation',
      color: '#d8aa2a',
      position: { x: 2260, y: 350 },
      size: { width: 240, height: 200 }, // right edge 2500 clears FIGARO (2320 + 160 + 20 padding)
    },
    {
      id: 'g-vision-language',
      label: 'Vision-Language',
      color: '#7080d8',
      position: { x: 2260, y: 630 },
      size: { width: 240, height: 200 }, // right edge 2500 clears CLIP (2320 + 160 + 20 padding); bottom 830 clears CLIP (700 + 80 + 20 + some)
    },
  ],
};

export default data;

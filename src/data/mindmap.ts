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
      position: { x: 1160, y: 150 },
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
      position: { x: 1410, y: 150 },
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
      position: { x: 1220, y: 350 },
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
      position: { x: 850, y: 420 },
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
      position: { x: 850, y: 620 },
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
      position: { x: 1410, y: 350 },
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
      position: { x: 1710, y: 420 },
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
      id: 'e-pixelrnn-vqvae',
      source: 'pixel-rnn',
      target: 'vq-vae',
      relationship: 'VQ-VAE uses a PixelRNN-style autoregressive prior to learn the distribution over its discrete codes.',
    },
  ],
  groups: [
    {
      id: 'g-transformers',
      label: 'Transformers',
      color: '#7c3aed',
      position: { x: 140, y: 80 },
      size: { width: 640, height: 200 }, // right edge 780 clears BERT (600 + 160 + 20 padding)
    },
    {
      id: 'g-embeddings',
      label: 'Embeddings',
      color: '#0ea5e9',
      position: { x: 140, y: 350 },
      size: { width: 240, height: 200 }, // right edge 380 clears word2vec (200 + 160 + 20 padding)
    },
    {
      id: 'g-autoencoders',
      label: 'Autoencoders',
      color: '#10b981',
      position: { x: 1100, y: 80 },
      size: { width: 490, height: 370 }, // right edge 1590 clears VQ-VAE (1410+160+20); bottom 450 clears conditional-vae (350+80+20)
    },
    {
      id: 'g-rnns',
      label: 'RNNs',
      color: '#ef4444',
      position: { x: 790, y: 350 },
      size: { width: 240, height: 370 }, // right edge 1030 clears papers (850 + 160 + 20); bottom 720 clears PixelRNN (620 + 80 + 20)
    },
    {
      id: 'g-music-generation',
      label: 'Music Generation',
      color: '#f59e0b',
      position: { x: 1650, y: 350 },
      size: { width: 240, height: 200 }, // right edge 1890 clears FIGARO (1710 + 160 + 20 padding)
    },
  ],
};

export default data;

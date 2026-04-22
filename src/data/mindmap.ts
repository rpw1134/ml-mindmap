import type { MindmapData } from '../types';

const data: MindmapData = {
  papers: [
    {
      id: 'attention-is-all-you-need',
      arxivId: '1706.03762',
      title: 'Attention Is All You Need',
      authors: ['Vaswani', 'Shazeer', 'Parmar', 'Uszkoreit', 'Jones', 'Gomez', 'Kaiser', 'Polosukhin'],
      abstract:
        'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.',
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
        'We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result, the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks.',
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
        'We demonstrate that scaling language models greatly improves task-agnostic, few-shot performance, sometimes even reaching competitiveness with prior state-of-the-art fine-tuning approaches. Specifically, we train GPT-3, an autoregressive language model with 175 billion parameters, and test its performance in the few-shot setting.',
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
        'We propose two novel model architectures for computing continuous vector representations of words from very large data sets. The quality of these representations is measured in a word similarity task, and the results are compared to the previously best performing techniques based on different types of neural networks.',
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
        'We introduce a stochastic variational inference and learning algorithm that scales to large datasets. By reparameterizing the variational lower bound, optimization through standard gradient methods becomes tractable. An approximate inference model (encoder) efficiently handles posterior inference for continuous latent variables alongside a generative model (decoder).',
      year: 2013,
      tags: ['vae', 'generative', 'latent-space', 'variational-inference'],
      parentGroup: 'g-autoencoders',
      position: { x: 1000, y: 150 },
    },
    {
      id: 'vq-vae',
      arxivId: '1711.00937',
      title: 'Neural Discrete Representation Learning',
      authors: ['van den Oord', 'Vinyals', 'Kavukcuoglu'],
      abstract:
        'We propose VQ-VAE, which learns discrete latent representations via vector quantization. Unlike standard VAEs that learn continuous codes, VQ-VAE circumvents posterior collapse by pairing a vector-quantized codebook with a learned autoregressive prior. The model demonstrates strong results on image, audio, and video generation.',
      year: 2017,
      tags: ['vq-vae', 'discrete-representation', 'generative', 'codebook'],
      parentGroup: 'g-autoencoders',
      position: { x: 1250, y: 150 },
    },
    {
      id: 'mdrnn',
      arxivId: '0705.2011',
      title: 'Multi-Dimensional Recurrent Neural Networks',
      authors: ['Graves', 'Fernandez', 'Schmidhuber'],
      abstract:
        'We propose multi-dimensional recurrent neural networks (MDRNNs), extending RNNs beyond one-dimensional sequence tasks. Where standard RNNs have proved effective for speech and online handwriting recognition, MDRNNs enable application to vision, video processing, and medical imaging without the scaling issues of other multi-dimensional models.',
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
        'We model the discrete joint distribution of image pixels using a deep neural network that sequentially predicts each pixel along both spatial dimensions. The approach captures all dependencies between pixels while introducing fast two-dimensional recurrent layers with residual connections. The model achieves state-of-the-art log-likelihood on natural image benchmarks.',
      year: 2016,
      tags: ['rnn', 'generative', 'image-generation', 'autoregressive'],
      parentGroup: 'g-rnns',
      position: { x: 850, y: 620 },
    },
    {
      id: 'figaro',
      arxivId: '2201.10936',
      title: 'FIGARO: Generating Symbolic Music with Fine-Grained Artistic Control',
      authors: ['von Rütte', 'Biggio', 'Kilcher', 'Hofmann'],
      abstract:
        'We introduce FIGARO, a model for controllable symbolic music generation via a self-supervised description-to-sequence task. The model extracts high-level features from target sequences and learns the conditional distribution of sequences given those descriptions, combining learned and expert features. FIGARO achieves state-of-the-art results in symbolic music generation while generalizing beyond its training distribution.',
      year: 2022,
      tags: ['music-generation', 'symbolic-music', 'transformer', 'controllable-generation'],
      parentGroup: 'g-music-generation',
      position: { x: 1500, y: 420 },
    },
  ],
  edges: [
    {
      id: 'e-attention-bert',
      source: 'attention-is-all-you-need',
      target: 'bert',
      // label: 'inspired',  // uncomment to add a relationship label
    },
    {
      id: 'e-attention-gpt3',
      source: 'attention-is-all-you-need',
      target: 'gpt3',
    },
    {
      id: 'e-word2vec-bert',
      source: 'word2vec',
      target: 'bert',
    },
    {
      id: 'e-vae-vqvae',
      source: 'vae',
      target: 'vq-vae',
    },
    {
      id: 'e-vqvae-figaro',
      source: 'vq-vae',
      target: 'figaro',
    },
    {
      id: 'e-mdrnn-pixelrnn',
      source: 'mdrnn',
      target: 'pixel-rnn',
    },
    {
      id: 'e-pixelrnn-vqvae',
      source: 'pixel-rnn',
      target: 'vq-vae',
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
      position: { x: 940, y: 80 },
      size: { width: 490, height: 200 }, // right edge 1430 clears VQ-VAE (1250 + 160 + 20 padding)
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
      position: { x: 1440, y: 350 },
      size: { width: 240, height: 200 }, // right edge 1680 clears FIGARO (1500 + 160 + 20 padding)
    },
  ],
};

export default data;

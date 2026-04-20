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
  ],
};

export default data;

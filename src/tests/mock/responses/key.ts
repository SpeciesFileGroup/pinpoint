type Response = {
  metadata: Metadata
  data: Data
}

type Data = {
  entries: { [key: string]: Entry }
  leads: { [key: string]: Lead }
}

type Entry = {
  children: number[]
  parent_id: number | null
  position: number | null
  couplet_number: string
  depth: number
}

type Lead = {
  text: string
  parent_id: number | null
  position: number | null
  target_label: null | string
  target_id?: number
  target_type: TargetType
  figures?: Figure[]
}

type Figure = {
  caption: null
  figure_label: string
  position: number
  thumb: string
  medium: string
  content_type: ContentType
  original_png: string
}

enum ContentType {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png'
}

enum TargetType {
  APIV1Otus = '/api/v1/otus',
  Internal = 'internal'
}

type Metadata = {
  server: string
  key_version: string
  title: string
  origin_citation: null
  attribution: null
  taxonomic_scope: string
}

export const keyResponse: Response = {
  metadata: {
    server: 'Mock Server',
    key_version: 'v1.0',
    title: 'Large Test Data',
    origin_citation: null,
    attribution: null,
    taxonomic_scope: 'Extended Mock Taxonomic Scope for Testing'
  },
  data: {
    entries: {
      '1': {
        children: [2, 3],
        parent_id: null,
        position: 1,
        couplet_number: '1.1',
        depth: 1
      },
      '2': {
        children: [4, 5],
        parent_id: 1,
        position: 2,
        couplet_number: '1.2',
        depth: 2
      },
      '3': {
        children: [6, 7],
        parent_id: 1,
        position: 3,
        couplet_number: '1.3',
        depth: 2
      },
      '4': {
        children: [8, 9],
        parent_id: 2,
        position: 4,
        couplet_number: '1.2.1',
        depth: 3
      },
      '5': {
        children: [],
        parent_id: 2,
        position: 5,
        couplet_number: '1.2.2',
        depth: 3
      },
      '6': {
        children: [],
        parent_id: 3,
        position: 6,
        couplet_number: '1.3.1',
        depth: 3
      },
      '7': {
        children: [],
        parent_id: 3,
        position: 7,
        couplet_number: '1.3.2',
        depth: 3
      },
      '8': {
        children: [],
        parent_id: 4,
        position: 8,
        couplet_number: '1.2.1.1',
        depth: 4
      },
      '9': {
        children: [10, 11],
        parent_id: 4,
        position: 9,
        couplet_number: '1.2.1.2',
        depth: 4
      },
      '10': {
        children: [],
        parent_id: 9,
        position: 10,
        couplet_number: '1.2.1.2.1',
        depth: 5
      },
      '11': {
        children: [],
        parent_id: 9,
        position: 11,
        couplet_number: '1.2.1.2.2',
        depth: 5
      }
    },
    leads: {
      '1': {
        text: 'Root lead text for testing.',
        parent_id: null,
        position: 1,
        target_label: 'Root Target Label',
        target_id: 1001,
        target_type: TargetType.APIV1Otus,
        figures: [
          {
            caption: null,
            figure_label: 'Root Fig',
            position: 1,
            thumb: 'https://example.com/root_thumb.jpg',
            medium: 'https://example.com/root_medium.jpg',
            content_type: ContentType.ImageJPEG,
            original_png: 'https://example.com/root_original.png'
          }
        ]
      },
      '2': {
        text: 'Intermediate lead text.',
        parent_id: 1,
        position: 2,
        target_label: 'Intermediate Target Label',
        target_id: 1002,
        target_type: TargetType.Internal,
        figures: []
      },
      '3': {
        text: 'Another intermediate lead text.',
        parent_id: 1,
        position: 3,
        target_label: 'Alt Intermediate Target',
        target_id: 1003,
        target_type: TargetType.APIV1Otus,
        figures: []
      },
      '4': {
        text: 'Child lead text for detailed testing.',
        parent_id: 2,
        position: 4,
        target_label: 'Child Target Label',
        target_id: 1004,
        target_type: TargetType.Internal,
        figures: [
          {
            caption: null,
            figure_label: 'Child Fig',
            position: 1,
            thumb: 'https://example.com/child_thumb.jpg',
            medium: 'https://example.com/child_medium.jpg',
            content_type: ContentType.ImagePNG,
            original_png: 'https://example.com/child_original.png'
          }
        ]
      },
      '5': {
        text: 'Leaf node lead text.',
        parent_id: 2,
        position: 5,
        target_label: 'Leaf Target',
        target_id: 1005,
        target_type: TargetType.APIV1Otus
      },
      '6': {
        text: 'Another leaf text.',
        parent_id: 3,
        position: 6,
        target_label: 'Leaf Target B',
        target_id: 1006,
        target_type: TargetType.Internal
      },
      '7': {
        text: 'Additional leaf text for testing.',
        parent_id: 3,
        position: 7,
        target_label: null,
        target_id: 1007,
        target_type: TargetType.APIV1Otus
      },
      '8': {
        text: 'Deep child lead text.',
        parent_id: 4,
        position: 8,
        target_label: 'Deep Child Target',
        target_id: 1008,
        target_type: TargetType.Internal
      },
      '9': {
        text: 'Nested child lead text.',
        parent_id: 4,
        position: 9,
        target_label: 'Nested Target',
        target_id: 1009,
        target_type: TargetType.APIV1Otus
      },
      '10': {
        text: 'Deeper nested lead text.',
        parent_id: 9,
        position: 10,
        target_label: 'Deeper Nested Target',
        target_id: 1010,
        target_type: TargetType.Internal
      },
      '11': {
        text: 'Deepest leaf lead text.',
        parent_id: 9,
        position: 11,
        target_label: 'Deepest Leaf',
        target_id: 1011,
        target_type: TargetType.APIV1Otus
      }
    }
  }
}

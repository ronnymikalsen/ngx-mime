import { Manifest } from './../core/models/manifest';

export let testManifest: any = {
  '@type': 'sc:Manifest',
  '@id':
    'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/manifest',
  label: 'Fjellkongen Ludvig "Ludden"',
  metadata: [
    {
      label: 'Tittel',
      value: 'Fjellkongen Ludvig "Ludden"'
    },
    {
      label: 'Forfatter',
      value: 'Skanche, Kari'
    },
    {
      label: 'Omhandler',
      value: 'Olestadengen, Ludvig Simensen'
    },
    {
      label: 'Publisert',
      value: 'Lillehammer: Thorsrud, Lokalhistorisk forl., 1994'
    },
    {
      label: 'Emne',
      value: 'ringsaker | originaler'
    },
    {
      label: 'Språk',
      value: 'Norsk (Bokmål)'
    },
    {
      label: 'ISBN',
      value: '8290439857'
    },
    {
      label: 'Varig lenke',
      value:
        "<a href='http://urn.nb.no/URN:NBN:no-nb_digibok_2008020404020' target='_blank'>" +
        'http://urn.nb.no/URN:NBN:no-nb_digibok_2008020404020' +
        '</a>'
    },
    {
      label: 'Medietype',
      value: 'Bøker'
    },
    {
      label: 'Dewey',
      value: '920.71'
    }
  ],
  license: 'https://beta.nb.no/lisens/copyright',
  attribution:
    'Dette verket kan ikke kopieres, spres, vises eller fremføres for ' +
    'allmennheten i noen form uten samtykke fra den enkelte rettighetshaver.',
  logo: 'http://example.com/dummylogo.jpg',
  service: {
    '@context': 'http://iiif.io/api/search/0/context.json',
    '@id': 'http://example.org/services/identifier/search',
    profile: 'http://iiif.io/api/search/0/search'
  },
  sequences: [
    {
      '@id':
        'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/sequence/normal',
      '@type': 'sc:Sequence',
      label: 'Current Page Order',
      viewingHint: 'paged',
      canvases: [
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_C1',
          '@type': 'sc:Canvas',
          label: '81',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_C1/full/72,0/0/native.jpg',
          height: 2564,
          width: 1839,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/annotation/URN:NBN:no-nb_digibok_2008020404020_C1',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_C1',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_C1',
                  protocol: 'http://iiif.io/api/image',
                  width: 1839,
                  height: 2564,
                  sizes: [
                    {
                      width: 919,
                      height: 1282
                    },
                    {
                      width: 459,
                      height: 641
                    },
                    {
                      width: 229,
                      height: 320
                    },
                    {
                      width: 114,
                      height: 160
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.003333333333333333,
                    physicalUnits: 'in'
                  }
                },
                height: 2564,
                width: 1839
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_C1'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_I1',
          '@type': 'sc:Canvas',
          label: '84',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_I1/full/72,0/0/native.jpg',
          height: 2592,
          width: 1818,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/annotation/URN:NBN:no-nb_digibok_2008020404020_I1',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_I1',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_I1',
                  protocol: 'http://iiif.io/api/image',
                  width: 1818,
                  height: 2592,
                  sizes: [
                    {
                      width: 909,
                      height: 1296
                    },
                    {
                      width: 454,
                      height: 648
                    },
                    {
                      width: 227,
                      height: 324
                    },
                    {
                      width: 113,
                      height: 162
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.003333333333333333,
                    physicalUnits: 'in'
                  }
                },
                height: 2592,
                width: 1818
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_I1'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0001',
          '@type': 'sc:Canvas',
          label: '1',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0001/full/72,0/0/native.jpg',
          height: 3272,
          width: 2368,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0001',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0001',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0001',
                  protocol: 'http://iiif.io/api/image',
                  width: 2368,
                  height: 3272,
                  sizes: [
                    {
                      width: 1184,
                      height: 1636
                    },
                    {
                      width: 592,
                      height: 818
                    },
                    {
                      width: 296,
                      height: 409
                    },
                    {
                      width: 148,
                      height: 204
                    },
                    {
                      width: 74,
                      height: 102
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3272,
                width: 2368
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0001'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0002',
          '@type': 'sc:Canvas',
          label: '2',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0002/full/72,0/0/native.jpg',
          height: 3312,
          width: 2368,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0002',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0002',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0002',
                  protocol: 'http://iiif.io/api/image',
                  width: 2368,
                  height: 3312,
                  sizes: [
                    {
                      width: 1184,
                      height: 1656
                    },
                    {
                      width: 592,
                      height: 828
                    },
                    {
                      width: 296,
                      height: 414
                    },
                    {
                      width: 148,
                      height: 207
                    },
                    {
                      width: 74,
                      height: 103
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3312,
                width: 2368
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0002'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0003',
          '@type': 'sc:Canvas',
          label: '3',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0003/full/72,0/0/native.jpg',
          height: 3272,
          width: 2368,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0003',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0003',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0003',
                  protocol: 'http://iiif.io/api/image',
                  width: 2368,
                  height: 3272,
                  sizes: [
                    {
                      width: 1184,
                      height: 1636
                    },
                    {
                      width: 592,
                      height: 818
                    },
                    {
                      width: 296,
                      height: 409
                    },
                    {
                      width: 148,
                      height: 204
                    },
                    {
                      width: 74,
                      height: 102
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3272,
                width: 2368
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0003'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0004',
          '@type': 'sc:Canvas',
          label: '4',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0004/full/72,0/0/native.jpg',
          height: 3312,
          width: 2368,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0004',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0004',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0004',
                  protocol: 'http://iiif.io/api/image',
                  width: 2368,
                  height: 3312,
                  sizes: [
                    {
                      width: 1184,
                      height: 1656
                    },
                    {
                      width: 592,
                      height: 828
                    },
                    {
                      width: 296,
                      height: 414
                    },
                    {
                      width: 148,
                      height: 207
                    },
                    {
                      width: 74,
                      height: 103
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3312,
                width: 2368
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0004'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0005',
          '@type': 'sc:Canvas',
          label: '5',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0005/full/72,0/0/native.jpg',
          height: 3272,
          width: 2360,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0005',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0005',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0005',
                  protocol: 'http://iiif.io/api/image',
                  width: 2360,
                  height: 3272,
                  sizes: [
                    {
                      width: 1180,
                      height: 1636
                    },
                    {
                      width: 590,
                      height: 818
                    },
                    {
                      width: 295,
                      height: 409
                    },
                    {
                      width: 147,
                      height: 204
                    },
                    {
                      width: 73,
                      height: 102
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3272,
                width: 2360
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0005'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0006',
          '@type': 'sc:Canvas',
          label: '6',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0006/full/72,0/0/native.jpg',
          height: 3312,
          width: 2360,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0006',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0006',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0006',
                  protocol: 'http://iiif.io/api/image',
                  width: 2360,
                  height: 3312,
                  sizes: [
                    {
                      width: 1180,
                      height: 1656
                    },
                    {
                      width: 590,
                      height: 828
                    },
                    {
                      width: 295,
                      height: 414
                    },
                    {
                      width: 147,
                      height: 207
                    },
                    {
                      width: 73,
                      height: 103
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3312,
                width: 2360
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0006'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0007',
          '@type': 'sc:Canvas',
          label: '7',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0007/full/72,0/0/native.jpg',
          height: 3272,
          width: 2360,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0007',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0007',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0007',
                  protocol: 'http://iiif.io/api/image',
                  width: 2360,
                  height: 3272,
                  sizes: [
                    {
                      width: 1180,
                      height: 1636
                    },
                    {
                      width: 590,
                      height: 818
                    },
                    {
                      width: 295,
                      height: 409
                    },
                    {
                      width: 147,
                      height: 204
                    },
                    {
                      width: 73,
                      height: 102
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3272,
                width: 2360
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0007'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0008',
          '@type': 'sc:Canvas',
          label: '8',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0008/full/72,0/0/native.jpg',
          height: 3304,
          width: 2360,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0008',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0008',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0008',
                  protocol: 'http://iiif.io/api/image',
                  width: 2360,
                  height: 3304,
                  sizes: [
                    {
                      width: 1180,
                      height: 1652
                    },
                    {
                      width: 590,
                      height: 826
                    },
                    {
                      width: 295,
                      height: 413
                    },
                    {
                      width: 147,
                      height: 206
                    },
                    {
                      width: 73,
                      height: 103
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3304,
                width: 2360
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0008'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0009',
          '@type': 'sc:Canvas',
          label: '9',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0009/full/72,0/0/native.jpg',
          height: 3272,
          width: 2360,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0009',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0009',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0009',
                  protocol: 'http://iiif.io/api/image',
                  width: 2360,
                  height: 3272,
                  sizes: [
                    {
                      width: 1180,
                      height: 1636
                    },
                    {
                      width: 590,
                      height: 818
                    },
                    {
                      width: 295,
                      height: 409
                    },
                    {
                      width: 147,
                      height: 204
                    },
                    {
                      width: 73,
                      height: 102
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3272,
                width: 2360
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0009'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0010',
          '@type': 'sc:Canvas',
          label: '10',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0010/full/72,0/0/native.jpg',
          height: 3312,
          width: 2360,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_0010',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_0010',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_0010',
                  protocol: 'http://iiif.io/api/image',
                  width: 2360,
                  height: 3312,
                  sizes: [
                    {
                      width: 1180,
                      height: 1656
                    },
                    {
                      width: 590,
                      height: 828
                    },
                    {
                      width: 295,
                      height: 414
                    },
                    {
                      width: 147,
                      height: 207
                    },
                    {
                      width: 73,
                      height: 103
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16, 32]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0025,
                    physicalUnits: 'in'
                  }
                },
                height: 3312,
                width: 2360
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0010'
            }
          ]
        },
        {
          '@id':
            'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_C2',
          '@type': 'sc:Canvas',
          label: '82',
          thumbnail:
            'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_C2/full/72,0/0/native.jpg',
          height: 2564,
          width: 163,
          images: [
            {
              '@id':
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/' +
                'annotation/URN:NBN:no-nb_digibok_2008020404020_C2',
              '@type': 'oa:Annotation',
              motivation: 'sc:painting',
              resource: {
                '@id': 'URN:NBN:no-nb_digibok_2008020404020_C2',
                '@type': 'dctypes:Image',
                format: 'image/jpeg',
                service: {
                  '@context': 'http://iiif.io/api/image/2/context.json',
                  '@id':
                    'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2008020404020_C2',
                  protocol: 'http://iiif.io/api/image',
                  width: 163,
                  height: 2564,
                  sizes: [
                    {
                      width: 81,
                      height: 1282
                    },
                    {
                      width: 40,
                      height: 641
                    },
                    {
                      width: 20,
                      height: 320
                    },
                    {
                      width: 10,
                      height: 160
                    }
                  ],
                  tiles: [
                    {
                      width: 1024,
                      scaleFactors: [1, 2, 4, 8, 16]
                    }
                  ],
                  profile: 'http://iiif.io/api/image/2/level1.json',
                  service: {
                    '@context':
                      'http://iiif.io/api/annex/service/physdim/1/context.json',
                    profile: 'http://iiif.io/api/annex/service/physdim',
                    physicalScale: 0.0033333333333333335,
                    physicalUnits: 'in'
                  }
                },
                height: 2564,
                width: 163
              },
              on:
                'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_C2'
            }
          ]
        }
      ]
    }
  ],
  structures: [
    {
      '@id':
        'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/range/r-0',
      '@type': 'sc:Range',
      label: 'Framside',
      canvases: [
        'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_C1'
      ]
    },
    {
      '@id':
        'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/range/r-1',
      '@type': 'sc:Range',
      label: 'Tittelside',
      canvases: [
        'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_0003'
      ]
    },
    {
      '@id':
        'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/range/r-2',
      '@type': 'sc:Range',
      label: 'Bakside',
      canvases: [
        'https://api.nb.no/catalog/v1/iiif/0266d0da8f0d064a7725048aacf19872/canvas/URN:NBN:no-nb_digibok_2008020404020_C3'
      ]
    }
  ]
};

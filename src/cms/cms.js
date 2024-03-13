import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import WholesalePagePreview from './preview-templates/WholesalePagePreview'
import ProductsPagePreview from './preview-templates/ProductsPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('wholesale', WholesalePagePreview)
CMS.registerPreviewTemplate('products', ProductsPagePreview)

import CMS from 'netlify-cms-app'
import { SimpleUUIDControl, SimpleUUIDPreview  } from '../widgets/uuid'

CMS.registerWidget("SimpleUUIDControl", SimpleUUIDControl, SimpleUUIDPreview)

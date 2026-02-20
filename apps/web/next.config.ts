import { withPayload } from "@payloadcms/next/withPayload";
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

if (process.env.NODE_ENV === 'development') {
  initOpenNextCloudflareForDev();
}

export default withPayload({});

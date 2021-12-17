import {get} from '@/helpers/net.js'

export async function getCurrentTelemetry() {
    let res = await get('/controller/{id}/telemetry')
    return res
}

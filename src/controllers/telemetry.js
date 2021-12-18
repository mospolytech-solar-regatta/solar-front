import net from '@/helpers/net'

export async function getCurrentTelemetry() {
    let id = 1
    let res = await net.get(`http://127.0.0.1:8000/controller/${id}/telemetry`)
    return res
}

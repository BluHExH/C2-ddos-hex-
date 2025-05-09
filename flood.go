
package main
import ("net/http";"time")
func main() {
    for {
        go func() {
            http.Get("https://example.com")
        }()
        time.Sleep(1 * time.Millisecond)
    }
}

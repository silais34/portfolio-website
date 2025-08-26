import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-primary-foreground text-xl">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-primary-foreground hover:text-accent transition-colors">
                Ana Sayfa
              </a>
              <a href="#about" className="text-primary-foreground hover:text-accent transition-colors">
                Hakkımda
              </a>
              <a href="#projects" className="text-primary-foreground hover:text-accent transition-colors">
                Projeler
              </a>
              <a href="#skills" className="text-primary-foreground hover:text-accent transition-colors">
                Yetenekler
              </a>
              <a href="#contact" className="text-primary-foreground hover:text-accent transition-colors">
                İletişim
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center">
              <Code className="w-16 h-16 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Bilgisayar Mühendisliği
              <span className="block text-accent">Öğrencisi</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              React, HTML ve CSS konularında uzmanlaşan freelance web geliştirici. Modern ve kullanıcı dostu web
              siteleri oluşturuyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <a href="#projects">Projelerimi Görüntüle</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">İletişime Geç</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">Hakkımda</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bilgisayar mühendisliği öğrencisi olarak web teknolojilerine odaklanıyorum
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-foreground mb-4">Freelance Web Geliştirici</h3>
              <p className="text-muted-foreground mb-6">
                Bilgisayar mühendisliği eğitimim sırasında web geliştirme alanında kendimi geliştirdim. HTML, CSS ve
                React teknolojilerinde temel bilgiye sahibim ve sürekli öğrenmeye devam ediyorum.
              </p>
              <p className="text-muted-foreground mb-6">
                Küçük işletmeler ve bireysel müşteriler için modern, responsive web siteleri oluşturuyorum. Her projede
                kullanıcı deneyimini ön planda tutarak, temiz ve işlevsel tasarımlar üretiyorum.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-card-foreground mb-4">Eğitim & Deneyim</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-card-foreground">Bilgisayar Mühendisliği</h5>
                  <p className="text-sm text-muted-foreground">Üniversite Öğrencisi</p>
                </div>
                <div>
                  <h5 className="font-medium text-card-foreground">Web Geliştirme</h5>
                  <p className="text-sm text-muted-foreground">HTML, CSS, React - Temel Seviye</p>
                </div>
                <div>
                  <h5 className="font-medium text-card-foreground">Freelance Çalışma</h5>
                  <p className="text-sm text-muted-foreground">Küçük projeler ve web siteleri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Teknik Yetenekler</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Sürekli öğrendiğim ve geliştirdiğim teknolojiler</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Globe className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Kullanıcı arayüzü geliştirme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Araçlar</CardTitle>
                <CardDescription>Geliştirme araçları</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Öğreniyorum</CardTitle>
                <CardDescription>Gelişim alanlarım</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">API Geliştirme</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">Projelerim</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GitHub'da paylaştığım ve üzerinde çalıştığım projeler
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-accent" />
                </div>
                <CardTitle>Kişisel Portfolyo</CardTitle>
                <CardDescription>React ve Tailwind CSS ile oluşturulmuş modern portfolyo sitesi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-chart-2/20 to-chart-2/10 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="w-16 h-16 text-chart-2" />
                </div>
                <CardTitle>Todo Uygulaması</CardTitle>
                <CardDescription>React hooks kullanarak yapılmış basit todo uygulaması</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">CSS</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-chart-3/20 to-chart-3/10 rounded-lg mb-4 flex items-center justify-center">
                  <Database className="w-16 h-16 text-chart-3" />
                </div>
                <CardTitle>Hava Durumu App</CardTitle>
                <CardDescription>API entegrasyonu ile hava durumu bilgilerini gösteren uygulama</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">API</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">İletişime Geçin</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Freelance projeler için benimle iletişime geçebilirsiniz
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">yunnis2018@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">github.com/silais34</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">linkedin.com/in/kullaniciadi</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Proje Teklifi</CardTitle>
                <CardDescription>Projeniz hakkında bilgi verin</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">İsim</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-posta</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Proje Detayları</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Projeniz hakkında kısaca bilgi verin..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sidebar-foreground mb-4">
              © 2024 Bilgisayar Mühendisliği Öğrencisi. Tüm hakları saklıdır.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-sidebar-foreground hover:text-sidebar-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

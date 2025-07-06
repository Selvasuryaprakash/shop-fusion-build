import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/800')] bg-cover bg-center opacity-10" />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent text-accent-foreground px-4 py-2">
                New Collection 2024
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-lg">
                Explore our curated collection of premium products designed for 
                the modern lifestyle. Quality meets affordability.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">4.9/5</span>
                <span className="text-primary-foreground/70"> from 2,847 reviews</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Shop Collection
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-2xl lg:text-3xl font-bold">50K+</div>
                <div className="text-sm text-primary-foreground/70">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold">1000+</div>
                <div className="text-sm text-primary-foreground/70">Products</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold">24/7</div>
                <div className="text-sm text-primary-foreground/70">Support</div>
              </div>
            </div>
          </div>

          {/* Featured Product Preview */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-muted rounded-xl overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-6xl">🎧</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className="bg-success text-success-foreground">Bestseller</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  Premium Wireless Headphones
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">$299</span>
                  <span className="text-sm text-muted-foreground line-through">$399</span>
                  <Badge variant="outline" className="text-xs">25% OFF</Badge>
                </div>
                
                <Button variant="cart" className="w-full">
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg">
              NEW
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
};
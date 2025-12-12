export default function PropertyGallery() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-4 gap-2 lg:gap-4 h-[400px] lg:h-[600px]">
        <div className="col-span-4 lg:col-span-2 lg:row-span-2">
          <img
            src="https://placehold.co/1200x800?text=Cozy+creekside+bungalow+nestled+in+Shenandoah+Valley+with+beautiful+natural+rock+wall+and+flowing+creek+at+sunset"
            alt="Cozy creekside bungalow nestled in Shenandoah Valley with beautiful natural rock wall and flowing creek at sunset"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <img
            src="https://placehold.co/600x400?text=Serene+trout+stocked+creek+flowing+past+private+waterfront+property+with+lush+green+trees+and+mountain+views"
            alt="Serene trout stocked creek flowing past private waterfront property with lush green trees and mountain views"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <img
            src="https://placehold.co/600x400?text=Comfortable+master+bedroom+with+queen+bed+rustic+wood+accents+and+large+windows+overlooking+nature"
            alt="Comfortable master bedroom with queen bed rustic wood accents and large windows overlooking nature"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 hidden lg:block">
          <img
            src="https://placehold.co/600x400?text=Screened+in+porch+with+comfortable+seating+overlooking+creek+and+majestic+rock+wall+perfect+for+morning+coffee"
            alt="Screened in porch with comfortable seating overlooking creek and majestic rock wall perfect for morning coffee"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 hidden lg:block">
          <img
            src="https://placehold.co/600x400?text=Stone+patio+with+outdoor+seating+wood+burning+fire+pit+and+BBQ+grill+surrounded+by+two+acres+of+private+nature"
            alt="Stone patio with outdoor seating wood burning fire pit and BBQ grill surrounded by two acres of private nature"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

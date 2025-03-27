import { Feature as FeatureType } from '../types/contentful';

interface Props {
  features: FeatureType[];
}

export const Features = ({ features }: Props) => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Nossos Recursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-slate-200"
            >
              <div className="text-3xl text-indigo-600 mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
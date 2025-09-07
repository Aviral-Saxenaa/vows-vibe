import { User, Star } from 'lucide-react';

interface Review {
  id: string;
  customerName: string;
  date: string;
  rating: number;
  comment: string;
  images?: string[];
}

interface CustomerReviewsProps {
  reviews: Review[];
}

export function CustomerReviews({ reviews }: CustomerReviewsProps) {
  const demoReviews: Review[] = [
    {
      id: '1',
      customerName: 'Anu',
      date: '15/08/24',
      rating: 5,
      comment: 'Such a gorgeous necklace. Got many compliments as well. Absolutely loved it',
      images: ['/placeholder.svg', '/placeholder.svg']
    },
    {
      id: '2',
      customerName: 'Anu',
      date: '15/08/24',
      rating: 5,
      comment: 'Looks beautiful 😻❤️❤️❤️ Go for it girls 😍💝💐 the quality is good ..',
      images: ['/placeholder.svg']
    }
  ];

  const displayReviews = reviews.length > 0 ? reviews : demoReviews;

  return (
    <div className="w-full max-w-lg">
      <div className="border-t pt-6" style={{ borderColor: '#FF8F9D' }}>
        <div className="flex flex-col gap-6">
          <h3 className="text-neutral text-xl font-bold font-montserrat">
            Customer Ratings
          </h3>

          <div className="border-t pt-6" style={{ borderColor: '#FF8F9D' }}>
            <div className="flex flex-col gap-6">
              {displayReviews.map((review, index) => (
                <div key={review.id}>
                  <div className="flex flex-col gap-4">
                    {/* Customer Info */}
                    <div className="flex flex-col gap-2.5 max-w-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-neutral" strokeWidth={1.5} />
                        </div>
                        <span className="text-neutral font-montserrat text-xl font-medium">
                          {review.customerName}
                        </span>
                      </div>
                      
                      <span className="text-muted font-montserrat text-sm font-medium">
                        {review.date}
                      </span>

                      {/* Rating Stars */}
                      <div className="flex gap-1 px-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className="w-3 h-3 text-yellow-400"
                            fill={i < review.rating ? '#FCD34D' : 'none'}
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Comment */}
                    <p className="text-neutral font-montserrat text-lg font-normal">
                      {review.comment}
                    </p>

                    {/* Review Images */}
                    {review.images && review.images.length > 0 && (
                      <div className="flex gap-3">
                        {review.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-[152px] h-[152px] bg-gray-200 rounded"
                          >
                            <img
                              src={image}
                              alt={`Review image ${imgIndex + 1}`}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Separator */}
                  {index < displayReviews.length - 1 && (
                    <div className="border-t mt-6" style={{ borderColor: '#FF8F9D' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

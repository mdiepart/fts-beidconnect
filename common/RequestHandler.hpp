#ifndef __REQUEST_HANDLER__
#define __REQUEST_HANDLER__

#include <iostream>

class RequestHandler
{
public:
   RequestHandler() { };
   virtual ~RequestHandler() {};  //without this destructor of derived handler is not called
   typedef std::shared_ptr<RequestHandler> Ptr;
   
   virtual std::string process() = 0;
   static std::shared_ptr<RequestHandler> createRequestHandler(std::shared_ptr <std::stringstream> ssRequest);
protected:
   std::shared_ptr <std::stringstream> ssRequest;
};

#endif //__HANDLE_REQUEST_H

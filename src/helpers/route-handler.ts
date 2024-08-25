import { AxiosError, type AxiosResponse } from 'axios';
import { type NextRequest, NextResponse } from 'next/server';

const defaultErrors = {
  message: 'An error occurred while processing your request. Please try again later.'
};

export const routeHandler = (handler: (request: NextRequest, context: Params<string>) => Promise<AxiosResponse>) => {
  return async (req: NextRequest, context: Params) => {
    try {
      const res = await handler(req, context);
      const data = res.data;

      return NextResponse.json(data, { status: res.status || 200 });
    } catch (error) {
      if (error instanceof AxiosError) {
        return NextResponse.json(error?.response?.data ?? defaultErrors, {
          status: error?.response?.status ?? 400
        });
      }
    }
    return NextResponse.json(defaultErrors, { status: 500 });
  };
};

export const routeFileHandler = (
  handler: (request: NextRequest, context: Params<string>) => Promise<AxiosResponse>
) => {
  return async (req: NextRequest, context: Params) => {
    try {
      const res = await handler(req, context);
      const data = res.data;
      const response = new NextResponse(data, { headers: res.headers as Record<string, string> });
      response.headers.set('content-type', 'application/octet-stream');
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return NextResponse.json(error?.response?.data ?? defaultErrors, {
          status: error?.response?.status ?? 400
        });
      }
    }
    return NextResponse.json(defaultErrors, { status: 500 });
  };
};

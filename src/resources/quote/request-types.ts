import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$QuoteAcceptBody,
  QuoteAcceptBody,
  Schemas$QuoteAcceptBody,
} from "@sideko-inc/stripe/types/quote-accept-body";
import {
  External$QuoteCancelBody,
  QuoteCancelBody,
  Schemas$QuoteCancelBody,
} from "@sideko-inc/stripe/types/quote-cancel-body";
import {
  External$QuoteCreateBody,
  QuoteCreateBody,
  Schemas$QuoteCreateBody,
} from "@sideko-inc/stripe/types/quote-create-body";
import {
  External$QuoteFinalizeBody,
  QuoteFinalizeBody,
  Schemas$QuoteFinalizeBody,
} from "@sideko-inc/stripe/types/quote-finalize-body";
import {
  External$QuoteUpdateBody,
  QuoteUpdateBody,
  Schemas$QuoteUpdateBody,
} from "@sideko-inc/stripe/types/quote-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * The ID of the customer whose quotes will be retrieved.
   */
  customer?: string | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * The status of the quote.
   */
  status?: ("accepted" | "canceled" | "draft" | "open") | undefined;
  /**
   * Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.
   */
  testClock?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("accepted" | "canceled" | "draft" | "open") | undefined;
  test_clock?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["accepted", "canceled", "draft", "open"]).optional(),
    test_clock: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
      test_clock: "testClock",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["accepted", "canceled", "draft", "open"]).optional(),
    testClock: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
      testClock: "test_clock",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  quote: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  quote: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    quote: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote: "quote",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    quote: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote: "quote",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * ComputedUpfrontLineItemsRequest
 */
export type ComputedUpfrontLineItemsRequest = {
  quote: string;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ComputedUpfrontLineItemsRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ComputedUpfrontLineItemsRequest = {
  quote: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ComputedUpfrontLineItemsRequest
 */
const SchemaIn$ComputedUpfrontLineItemsRequest: z.ZodType<
  ComputedUpfrontLineItemsRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    quote: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote: "quote",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ComputedUpfrontLineItemsRequest
 */
const SchemaOut$ComputedUpfrontLineItemsRequest: z.ZodType<
  External$ComputedUpfrontLineItemsRequest, // output type of this zod object
  z.ZodTypeDef,
  ComputedUpfrontLineItemsRequest // the object to be transformed
> = z
  .object({
    quote: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote: "quote",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ComputedUpfrontLineItemsRequest = {
  in: SchemaIn$ComputedUpfrontLineItemsRequest,
  out: SchemaOut$ComputedUpfrontLineItemsRequest,
};

/**
 * PdfRequest
 */
export type PdfRequest = {
  quote: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * PdfRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PdfRequest = {
  quote: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PdfRequest
 */
const SchemaIn$PdfRequest: z.ZodType<
  PdfRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    quote: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote: "quote",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PdfRequest
 */
const SchemaOut$PdfRequest: z.ZodType<
  External$PdfRequest, // output type of this zod object
  z.ZodTypeDef,
  PdfRequest // the object to be transformed
> = z
  .object({
    quote: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote: "quote",
      expand: "expand",
    });
  });

export const Schemas$PdfRequest = {
  in: SchemaIn$PdfRequest,
  out: SchemaOut$PdfRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data?: QuoteCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$QuoteCreateBody | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$QuoteCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$QuoteCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: QuoteUpdateBody | undefined;
  quote: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$QuoteUpdateBody | undefined;
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$QuoteUpdateBody.in.optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$QuoteUpdateBody.out.optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * AcceptRequest
 */
export type AcceptRequest = {
  data?: QuoteAcceptBody | undefined;
  quote: string;
};

/**
 * @internal
 * AcceptRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AcceptRequest = {
  data?: External$QuoteAcceptBody | undefined;
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AcceptRequest
 */
const SchemaIn$AcceptRequest: z.ZodType<
  AcceptRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$QuoteAcceptBody.in.optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AcceptRequest
 */
const SchemaOut$AcceptRequest: z.ZodType<
  External$AcceptRequest, // output type of this zod object
  z.ZodTypeDef,
  AcceptRequest // the object to be transformed
> = z
  .object({
    data: Schemas$QuoteAcceptBody.out.optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
    });
  });

export const Schemas$AcceptRequest = {
  in: SchemaIn$AcceptRequest,
  out: SchemaOut$AcceptRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: QuoteCancelBody | undefined;
  quote: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$QuoteCancelBody | undefined;
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$QuoteCancelBody.in.optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    data: Schemas$QuoteCancelBody.out.optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * FinalizeRequest
 */
export type FinalizeRequest = {
  data?: QuoteFinalizeBody | undefined;
  quote: string;
};

/**
 * @internal
 * FinalizeRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinalizeRequest = {
  data?: External$QuoteFinalizeBody | undefined;
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinalizeRequest
 */
const SchemaIn$FinalizeRequest: z.ZodType<
  FinalizeRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$QuoteFinalizeBody.in.optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinalizeRequest
 */
const SchemaOut$FinalizeRequest: z.ZodType<
  External$FinalizeRequest, // output type of this zod object
  z.ZodTypeDef,
  FinalizeRequest // the object to be transformed
> = z
  .object({
    data: Schemas$QuoteFinalizeBody.out.optional(),
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      quote: "quote",
    });
  });

export const Schemas$FinalizeRequest = {
  in: SchemaIn$FinalizeRequest,
  out: SchemaOut$FinalizeRequest,
};

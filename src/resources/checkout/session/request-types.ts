import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CheckoutSessionCreateBody,
  External$CheckoutSessionCreateBody,
  Schemas$CheckoutSessionCreateBody,
} from "@sideko-inc/stripe/types/checkout-session-create-body";
import {
  CheckoutSessionExpireBody,
  External$CheckoutSessionExpireBody,
  Schemas$CheckoutSessionExpireBody,
} from "@sideko-inc/stripe/types/checkout-session-expire-body";
import {
  CheckoutSessionListCreatedObj0,
  External$CheckoutSessionListCreatedObj0,
  Schemas$CheckoutSessionListCreatedObj0,
} from "@sideko-inc/stripe/types/checkout-session-list-created-obj0";
import {
  CheckoutSessionListCustomerDetails,
  External$CheckoutSessionListCustomerDetails,
  Schemas$CheckoutSessionListCustomerDetails,
} from "@sideko-inc/stripe/types/checkout-session-list-customer-details";
import {
  CheckoutSessionUpdateBody,
  External$CheckoutSessionUpdateBody,
  Schemas$CheckoutSessionUpdateBody,
} from "@sideko-inc/stripe/types/checkout-session-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return Checkout Sessions that were created during the given date interval.
   */
  created?: (CheckoutSessionListCreatedObj0 | number) | undefined;
  /**
   * Only return the Checkout Sessions for the Customer specified.
   */
  customer?: string | undefined;
  /**
   * Only return the Checkout Sessions for the Customer details specified.
   */
  customerDetails?: CheckoutSessionListCustomerDetails | undefined;
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
   * Only return the Checkout Session for the PaymentIntent specified.
   */
  paymentIntent?: string | undefined;
  /**
   * Only return the Checkout Sessions for the Payment Link specified.
   */
  paymentLink?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return the Checkout Sessions matching the given status.
   */
  status?: ("complete" | "expired" | "open") | undefined;
  /**
   * Only return the Checkout Session for the subscription specified.
   */
  subscription?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: (External$CheckoutSessionListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  customer_details?: External$CheckoutSessionListCustomerDetails | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  payment_intent?: string | undefined;
  payment_link?: string | undefined;
  starting_after?: string | undefined;
  status?: ("complete" | "expired" | "open") | undefined;
  subscription?: string | undefined;
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
    created: z
      .union([Schemas$CheckoutSessionListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    customer_details: Schemas$CheckoutSessionListCustomerDetails.in.optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    payment_intent: z.string().optional(),
    payment_link: z.string().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["complete", "expired", "open"]).optional(),
    subscription: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer: "customer",
      customer_details: "customerDetails",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      payment_intent: "paymentIntent",
      payment_link: "paymentLink",
      starting_after: "startingAfter",
      status: "status",
      subscription: "subscription",
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
    created: z
      .union([Schemas$CheckoutSessionListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    customerDetails: Schemas$CheckoutSessionListCustomerDetails.out.optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    paymentIntent: z.string().optional(),
    paymentLink: z.string().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["complete", "expired", "open"]).optional(),
    subscription: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer: "customer",
      customerDetails: "customer_details",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      paymentIntent: "payment_intent",
      paymentLink: "payment_link",
      startingAfter: "starting_after",
      status: "status",
      subscription: "subscription",
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
  session: string;
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
  session: string;
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
    session: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
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
    session: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data?: CheckoutSessionCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$CheckoutSessionCreateBody | undefined;
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
    data: Schemas$CheckoutSessionCreateBody.in.optional(),
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
    data: Schemas$CheckoutSessionCreateBody.out.optional(),
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
  data?: CheckoutSessionUpdateBody | undefined;
  session: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$CheckoutSessionUpdateBody | undefined;
  session: string;
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
    data: Schemas$CheckoutSessionUpdateBody.in.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
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
    data: Schemas$CheckoutSessionUpdateBody.out.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * ExpireRequest
 */
export type ExpireRequest = {
  data?: CheckoutSessionExpireBody | undefined;
  session: string;
};

/**
 * @internal
 * ExpireRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExpireRequest = {
  data?: External$CheckoutSessionExpireBody | undefined;
  session: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExpireRequest
 */
const SchemaIn$ExpireRequest: z.ZodType<
  ExpireRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$CheckoutSessionExpireBody.in.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExpireRequest
 */
const SchemaOut$ExpireRequest: z.ZodType<
  External$ExpireRequest, // output type of this zod object
  z.ZodTypeDef,
  ExpireRequest // the object to be transformed
> = z
  .object({
    data: Schemas$CheckoutSessionExpireBody.out.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

export const Schemas$ExpireRequest = {
  in: SchemaIn$ExpireRequest,
  out: SchemaOut$ExpireRequest,
};

import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$SetupIntentCancelBody,
  Schemas$SetupIntentCancelBody,
  SetupIntentCancelBody,
} from "@sideko-inc/stripe/types/setup-intent-cancel-body";
import {
  External$SetupIntentConfirmBody,
  Schemas$SetupIntentConfirmBody,
  SetupIntentConfirmBody,
} from "@sideko-inc/stripe/types/setup-intent-confirm-body";
import {
  External$SetupIntentCreateBody,
  Schemas$SetupIntentCreateBody,
  SetupIntentCreateBody,
} from "@sideko-inc/stripe/types/setup-intent-create-body";
import {
  External$SetupIntentListCreatedObj0,
  Schemas$SetupIntentListCreatedObj0,
  SetupIntentListCreatedObj0,
} from "@sideko-inc/stripe/types/setup-intent-list-created-obj0";
import {
  External$SetupIntentUpdateBody,
  Schemas$SetupIntentUpdateBody,
  SetupIntentUpdateBody,
} from "@sideko-inc/stripe/types/setup-intent-update-body";
import {
  External$SetupIntentVerifyMicrodepositsBody,
  Schemas$SetupIntentVerifyMicrodepositsBody,
  SetupIntentVerifyMicrodepositsBody,
} from "@sideko-inc/stripe/types/setup-intent-verify-microdeposits-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean | undefined;
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: (SetupIntentListCreatedObj0 | number) | undefined;
  /**
   * Only return SetupIntents for the customer specified by this customer ID.
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
   * Only return SetupIntents that associate with the specified payment method.
   */
  paymentMethod?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  attach_to_self?: boolean | undefined;
  created?: (External$SetupIntentListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  payment_method?: string | undefined;
  starting_after?: string | undefined;
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
    attach_to_self: z.boolean().optional(),
    created: z
      .union([Schemas$SetupIntentListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    payment_method: z.string().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attach_to_self: "attachToSelf",
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      payment_method: "paymentMethod",
      starting_after: "startingAfter",
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
    attachToSelf: z.boolean().optional(),
    created: z
      .union([Schemas$SetupIntentListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    paymentMethod: z.string().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      attachToSelf: "attach_to_self",
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      paymentMethod: "payment_method",
      startingAfter: "starting_after",
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
  intent: string;
  /**
   * The client secret of the SetupIntent. We require this string if you use a publishable key to retrieve the SetupIntent.
   */
  clientSecret?: string | undefined;
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
  intent: string;
  client_secret?: string | undefined;
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
    intent: z.string(),
    client_secret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      intent: "intent",
      client_secret: "clientSecret",
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
    intent: z.string(),
    clientSecret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      intent: "intent",
      clientSecret: "client_secret",
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
  data?: SetupIntentCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$SetupIntentCreateBody | undefined;
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
    data: Schemas$SetupIntentCreateBody.in.optional(),
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
    data: Schemas$SetupIntentCreateBody.out.optional(),
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
  data?: SetupIntentUpdateBody | undefined;
  intent: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$SetupIntentUpdateBody | undefined;
  intent: string;
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
    data: Schemas$SetupIntentUpdateBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
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
    data: Schemas$SetupIntentUpdateBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: SetupIntentCancelBody | undefined;
  intent: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$SetupIntentCancelBody | undefined;
  intent: string;
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
    data: Schemas$SetupIntentCancelBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
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
    data: Schemas$SetupIntentCancelBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * ConfirmRequest
 */
export type ConfirmRequest = {
  data?: SetupIntentConfirmBody | undefined;
  intent: string;
};

/**
 * @internal
 * ConfirmRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmRequest = {
  data?: External$SetupIntentConfirmBody | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmRequest
 */
const SchemaIn$ConfirmRequest: z.ZodType<
  ConfirmRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SetupIntentConfirmBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmRequest
 */
const SchemaOut$ConfirmRequest: z.ZodType<
  External$ConfirmRequest, // output type of this zod object
  z.ZodTypeDef,
  ConfirmRequest // the object to be transformed
> = z
  .object({
    data: Schemas$SetupIntentConfirmBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$ConfirmRequest = {
  in: SchemaIn$ConfirmRequest,
  out: SchemaOut$ConfirmRequest,
};

/**
 * VerifyMicrodepositsRequest
 */
export type VerifyMicrodepositsRequest = {
  data?: SetupIntentVerifyMicrodepositsBody | undefined;
  intent: string;
};

/**
 * @internal
 * VerifyMicrodepositsRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VerifyMicrodepositsRequest = {
  data?: External$SetupIntentVerifyMicrodepositsBody | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VerifyMicrodepositsRequest
 */
const SchemaIn$VerifyMicrodepositsRequest: z.ZodType<
  VerifyMicrodepositsRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SetupIntentVerifyMicrodepositsBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VerifyMicrodepositsRequest
 */
const SchemaOut$VerifyMicrodepositsRequest: z.ZodType<
  External$VerifyMicrodepositsRequest, // output type of this zod object
  z.ZodTypeDef,
  VerifyMicrodepositsRequest // the object to be transformed
> = z
  .object({
    data: Schemas$SetupIntentVerifyMicrodepositsBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$VerifyMicrodepositsRequest = {
  in: SchemaIn$VerifyMicrodepositsRequest,
  out: SchemaOut$VerifyMicrodepositsRequest,
};

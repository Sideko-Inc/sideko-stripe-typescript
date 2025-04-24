import { zodTransform } from "@sideko-inc/stripe/core";
import {
  BillingCreditGrantCreateBodyAmount,
  External$BillingCreditGrantCreateBodyAmount,
  Schemas$BillingCreditGrantCreateBodyAmount,
} from "@sideko-inc/stripe/types/billing-credit-grant-create-body-amount";
import {
  BillingCreditGrantCreateBodyApplicabilityConfig,
  External$BillingCreditGrantCreateBodyApplicabilityConfig,
  Schemas$BillingCreditGrantCreateBodyApplicabilityConfig,
} from "@sideko-inc/stripe/types/billing-credit-grant-create-body-applicability-config";
import {
  BillingCreditGrantCreateBodyMetadata,
  External$BillingCreditGrantCreateBodyMetadata,
  Schemas$BillingCreditGrantCreateBodyMetadata,
} from "@sideko-inc/stripe/types/billing-credit-grant-create-body-metadata";
import {
  BillingCreditGrantExpireBody,
  External$BillingCreditGrantExpireBody,
  Schemas$BillingCreditGrantExpireBody,
} from "@sideko-inc/stripe/types/billing-credit-grant-expire-body";
import {
  BillingCreditGrantUpdateBody,
  External$BillingCreditGrantUpdateBody,
  Schemas$BillingCreditGrantUpdateBody,
} from "@sideko-inc/stripe/types/billing-credit-grant-update-body";
import {
  BillingCreditGrantVoidBody,
  External$BillingCreditGrantVoidBody,
  Schemas$BillingCreditGrantVoidBody,
} from "@sideko-inc/stripe/types/billing-credit-grant-void-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return credit grants for this customer.
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
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
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
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
  /**
   * Unique identifier for the object.
   */
  id: string;
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
  id: string;
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
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
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
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
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
  /**
   * Amount of this credit grant.
   */
  amount: BillingCreditGrantCreateBodyAmount;
  /**
   * Configuration specifying what this credit grant applies to. We currently only support `metered` prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them.
   */
  applicabilityConfig: BillingCreditGrantCreateBodyApplicabilityConfig;
  /**
   * The category of this credit grant.
   */
  category: "paid" | "promotional";
  /**
   * ID of the customer to receive the billing credits.
   */
  customer: string;
  /**
   * The time when the billing credits become effective-when they're eligible for use. It defaults to the current timestamp if not specified.
   */
  effectiveAt?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The time when the billing credits expire. If not specified, the billing credits don't expire.
   */
  expiresAt?: number | undefined;
  /**
   * Set of key-value pairs that you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
   */
  metadata?: BillingCreditGrantCreateBodyMetadata | undefined;
  /**
   * A descriptive name shown in the Dashboard.
   */
  name?: string | undefined;
  /**
   * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
   */
  priority?: number | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount: External$BillingCreditGrantCreateBodyAmount;
  applicability_config: External$BillingCreditGrantCreateBodyApplicabilityConfig;
  category: "paid" | "promotional";
  customer: string;
  effective_at?: number | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  metadata?: External$BillingCreditGrantCreateBodyMetadata | undefined;
  name?: string | undefined;
  priority?: number | undefined;
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
    amount: Schemas$BillingCreditGrantCreateBodyAmount.in,
    applicability_config:
      Schemas$BillingCreditGrantCreateBodyApplicabilityConfig.in,
    category: z.enum(["paid", "promotional"]),
    customer: z.string(),
    effective_at: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    metadata: Schemas$BillingCreditGrantCreateBodyMetadata.in.optional(),
    name: z.string().optional(),
    priority: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicability_config: "applicabilityConfig",
      category: "category",
      customer: "customer",
      effective_at: "effectiveAt",
      expand: "expand",
      expires_at: "expiresAt",
      metadata: "metadata",
      name: "name",
      priority: "priority",
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
    amount: Schemas$BillingCreditGrantCreateBodyAmount.out,
    applicabilityConfig:
      Schemas$BillingCreditGrantCreateBodyApplicabilityConfig.out,
    category: z.enum(["paid", "promotional"]),
    customer: z.string(),
    effectiveAt: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    metadata: Schemas$BillingCreditGrantCreateBodyMetadata.out.optional(),
    name: z.string().optional(),
    priority: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicabilityConfig: "applicability_config",
      category: "category",
      customer: "customer",
      effectiveAt: "effective_at",
      expand: "expand",
      expiresAt: "expires_at",
      metadata: "metadata",
      name: "name",
      priority: "priority",
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
  data?: BillingCreditGrantUpdateBody | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$BillingCreditGrantUpdateBody | undefined;
  id: string;
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
    data: Schemas$BillingCreditGrantUpdateBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
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
    data: Schemas$BillingCreditGrantUpdateBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
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
  data?: BillingCreditGrantExpireBody | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
};

/**
 * @internal
 * ExpireRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExpireRequest = {
  data?: External$BillingCreditGrantExpireBody | undefined;
  id: string;
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
    data: Schemas$BillingCreditGrantExpireBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
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
    data: Schemas$BillingCreditGrantExpireBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$ExpireRequest = {
  in: SchemaIn$ExpireRequest,
  out: SchemaOut$ExpireRequest,
};

/**
 * VoidRequest
 */
export type VoidRequest = {
  data?: BillingCreditGrantVoidBody | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
};

/**
 * @internal
 * VoidRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VoidRequest = {
  data?: External$BillingCreditGrantVoidBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VoidRequest
 */
const SchemaIn$VoidRequest: z.ZodType<
  VoidRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$BillingCreditGrantVoidBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VoidRequest
 */
const SchemaOut$VoidRequest: z.ZodType<
  External$VoidRequest, // output type of this zod object
  z.ZodTypeDef,
  VoidRequest // the object to be transformed
> = z
  .object({
    data: Schemas$BillingCreditGrantVoidBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$VoidRequest = {
  in: SchemaIn$VoidRequest,
  out: SchemaOut$VoidRequest,
};

import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperTreasuryOutboundPaymentFailBody,
  Schemas$TestHelperTreasuryOutboundPaymentFailBody,
  TestHelperTreasuryOutboundPaymentFailBody,
} from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-fail-body";
import {
  External$TestHelperTreasuryOutboundPaymentPostBody,
  Schemas$TestHelperTreasuryOutboundPaymentPostBody,
  TestHelperTreasuryOutboundPaymentPostBody,
} from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-post-body";
import {
  External$TestHelperTreasuryOutboundPaymentReturnedBody,
  Schemas$TestHelperTreasuryOutboundPaymentReturnedBody,
  TestHelperTreasuryOutboundPaymentReturnedBody,
} from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-returned-body";
import {
  External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
  Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
} from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-update-body-tracking-details";
import * as z from "zod";

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Details about network-specific tracking information.
   */
  trackingDetails: TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails;
  id: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  tracking_details: External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails;
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
    expand: z.array(z.string()).optional(),
    tracking_details:
      Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails.in,
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      tracking_details: "trackingDetails",
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
    expand: z.array(z.string()).optional(),
    trackingDetails:
      Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails.out,
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      trackingDetails: "tracking_details",
      id: "id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * FailRequest
 */
export type FailRequest = {
  data?: TestHelperTreasuryOutboundPaymentFailBody | undefined;
  id: string;
};

/**
 * @internal
 * FailRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FailRequest = {
  data?: External$TestHelperTreasuryOutboundPaymentFailBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FailRequest
 */
const SchemaIn$FailRequest: z.ZodType<
  FailRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperTreasuryOutboundPaymentFailBody.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FailRequest
 */
const SchemaOut$FailRequest: z.ZodType<
  External$FailRequest, // output type of this zod object
  z.ZodTypeDef,
  FailRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperTreasuryOutboundPaymentFailBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$FailRequest = {
  in: SchemaIn$FailRequest,
  out: SchemaOut$FailRequest,
};

/**
 * PostRequest
 */
export type PostRequest = {
  data?: TestHelperTreasuryOutboundPaymentPostBody | undefined;
  id: string;
};

/**
 * @internal
 * PostRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PostRequest = {
  data?: External$TestHelperTreasuryOutboundPaymentPostBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PostRequest
 */
const SchemaIn$PostRequest: z.ZodType<
  PostRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperTreasuryOutboundPaymentPostBody.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PostRequest
 */
const SchemaOut$PostRequest: z.ZodType<
  External$PostRequest, // output type of this zod object
  z.ZodTypeDef,
  PostRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperTreasuryOutboundPaymentPostBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$PostRequest = {
  in: SchemaIn$PostRequest,
  out: SchemaOut$PostRequest,
};

/**
 * ReturnedRequest
 */
export type ReturnedRequest = {
  data?: TestHelperTreasuryOutboundPaymentReturnedBody | undefined;
  id: string;
};

/**
 * @internal
 * ReturnedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReturnedRequest = {
  data?: External$TestHelperTreasuryOutboundPaymentReturnedBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReturnedRequest
 */
const SchemaIn$ReturnedRequest: z.ZodType<
  ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperTreasuryOutboundPaymentReturnedBody.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReturnedRequest
 */
const SchemaOut$ReturnedRequest: z.ZodType<
  External$ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  ReturnedRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperTreasuryOutboundPaymentReturnedBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$ReturnedRequest = {
  in: SchemaIn$ReturnedRequest,
  out: SchemaOut$ReturnedRequest,
};

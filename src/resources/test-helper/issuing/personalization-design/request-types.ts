import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperIssuingPersonalizationDesignActivateBody,
  Schemas$TestHelperIssuingPersonalizationDesignActivateBody,
  TestHelperIssuingPersonalizationDesignActivateBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-personalization-design-activate-body";
import {
  External$TestHelperIssuingPersonalizationDesignDeactivateBody,
  Schemas$TestHelperIssuingPersonalizationDesignDeactivateBody,
  TestHelperIssuingPersonalizationDesignDeactivateBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-personalization-design-deactivate-body";
import {
  External$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons,
  Schemas$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons,
  TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons,
} from "@sideko-inc/stripe/types/test-helper-issuing-personalization-design-reject-body-rejection-reasons";
import * as z from "zod";

/**
 * ActivateRequest
 */
export type ActivateRequest = {
  data?: TestHelperIssuingPersonalizationDesignActivateBody | undefined;
  personalizationDesign: string;
};

/**
 * @internal
 * ActivateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ActivateRequest = {
  data?:
    | External$TestHelperIssuingPersonalizationDesignActivateBody
    | undefined;
  personalization_design: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ActivateRequest
 */
const SchemaIn$ActivateRequest: z.ZodType<
  ActivateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingPersonalizationDesignActivateBody.in.optional(),
    personalization_design: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      personalization_design: "personalizationDesign",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ActivateRequest
 */
const SchemaOut$ActivateRequest: z.ZodType<
  External$ActivateRequest, // output type of this zod object
  z.ZodTypeDef,
  ActivateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingPersonalizationDesignActivateBody.out.optional(),
    personalizationDesign: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      personalizationDesign: "personalization_design",
    });
  });

export const Schemas$ActivateRequest = {
  in: SchemaIn$ActivateRequest,
  out: SchemaOut$ActivateRequest,
};

/**
 * DeactivateRequest
 */
export type DeactivateRequest = {
  data?: TestHelperIssuingPersonalizationDesignDeactivateBody | undefined;
  personalizationDesign: string;
};

/**
 * @internal
 * DeactivateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeactivateRequest = {
  data?:
    | External$TestHelperIssuingPersonalizationDesignDeactivateBody
    | undefined;
  personalization_design: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeactivateRequest
 */
const SchemaIn$DeactivateRequest: z.ZodType<
  DeactivateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingPersonalizationDesignDeactivateBody.in.optional(),
    personalization_design: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      personalization_design: "personalizationDesign",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeactivateRequest
 */
const SchemaOut$DeactivateRequest: z.ZodType<
  External$DeactivateRequest, // output type of this zod object
  z.ZodTypeDef,
  DeactivateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingPersonalizationDesignDeactivateBody.out.optional(),
    personalizationDesign: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      personalizationDesign: "personalization_design",
    });
  });

export const Schemas$DeactivateRequest = {
  in: SchemaIn$DeactivateRequest,
  out: SchemaOut$DeactivateRequest,
};

/**
 * RejectRequest
 */
export type RejectRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The reason(s) the personalization design was rejected.
   */
  rejectionReasons: TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons;
  personalizationDesign: string;
};

/**
 * @internal
 * RejectRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RejectRequest = {
  expand?: string[] | undefined;
  rejection_reasons: External$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons;
  personalization_design: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RejectRequest
 */
const SchemaIn$RejectRequest: z.ZodType<
  RejectRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    rejection_reasons:
      Schemas$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons.in,
    personalization_design: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      rejection_reasons: "rejectionReasons",
      personalization_design: "personalizationDesign",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RejectRequest
 */
const SchemaOut$RejectRequest: z.ZodType<
  External$RejectRequest, // output type of this zod object
  z.ZodTypeDef,
  RejectRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    rejectionReasons:
      Schemas$TestHelperIssuingPersonalizationDesignRejectBodyRejectionReasons.out,
    personalizationDesign: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      rejectionReasons: "rejection_reasons",
      personalizationDesign: "personalization_design",
    });
  });

export const Schemas$RejectRequest = {
  in: SchemaIn$RejectRequest,
  out: SchemaOut$RejectRequest,
};
